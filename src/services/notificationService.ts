import { NOTIFICATION_CONFIG } from '../config/notificationConfig';

export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

/**
 * Dispatch an enquiry to email channels
 */
async function dispatchEmail(data: EnquiryPayload): Promise<boolean> {
  const { targetEmail, web3FormsAccessKey } = NOTIFICATION_CONFIG;
  let success = false;

  // 1. Web3Forms (if access key configured)
  if (web3FormsAccessKey && web3FormsAccessKey.trim() !== '') {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          from_name: 'Techyora Website Enquiry',
          subject: `[Techyora Project Enquiry] ${data.service} - ${data.name}`,
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          company: data.company || 'Not provided',
          service: data.service,
          budget: data.budget || 'Not specified',
          message: data.message,
        }),
      });

      if (response.ok) {
        success = true;
      }
    } catch {
      // Continue to fallback
    }
  }

  // 2. FormSubmit AJAX fallback
  try {
    const fd = new FormData();
    fd.append('name', data.name);
    fd.append('email', data.email);
    fd.append('phone', data.phone || 'Not provided');
    fd.append('company', data.company || 'Not provided');
    fd.append('service', data.service);
    fd.append('budget', data.budget || 'Not specified');
    fd.append('message', data.message);
    fd.append('_subject', `[Techyora Project Enquiry] ${data.service} - ${data.name}`);
    fd.append('_template', 'table');
    fd.append('_captcha', 'false');
    fd.append('_replyto', data.email);

    await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: fd,
    });
    success = true;
  } catch {
    // Handled silently
  }

  return success;
}

/**
 * Dispatch automated WhatsApp notification via CallMeBot API
 */
async function dispatchWhatsApp(data: EnquiryPayload): Promise<boolean> {
  const { targetWhatsAppPhone, callMeBotApiKey } = NOTIFICATION_CONFIG;

  if (!callMeBotApiKey || callMeBotApiKey.trim() === '') {
    return false;
  }

  try {
    const formattedText = 
`🚀 *New Techyora Project Enquiry!*

👤 *Client:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone || 'Not provided'}
🏢 *Company:* ${data.company || 'Not provided'}
🛠 *Service:* ${data.service}
💰 *Budget:* ${data.budget || 'Not specified'}

📝 *Requirements:*
${data.message}`;

    const encodedText = encodeURIComponent(formattedText);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${targetWhatsAppPhone}&text=${encodedText}&apikey=${callMeBotApiKey}`;

    // Silent background fetch with no-cors to avoid CORS blocks on third-party bot APIs
    await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
    });

    return true;
  } catch {
    return false;
  }
}

/**
 * Dispatch to unified automation webhook (Make.com, Pabbly, Zapier, Google Apps Script)
 */
async function dispatchWebhook(data: EnquiryPayload): Promise<boolean> {
  const { webhookUrl } = NOTIFICATION_CONFIG;
  if (!webhookUrl || webhookUrl.trim() === '') return false;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...data,
      }),
      mode: 'no-cors',
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Main dispatcher: Executes all channels silently in parallel
 * Ensures zero page navigation, zero popups, and non-blocking execution
 */
export async function dispatchEnquiry(data: EnquiryPayload): Promise<void> {
  // Fire all dispatchers asynchronously without blocking the UI
  Promise.allSettled([
    dispatchEmail(data),
    dispatchWhatsApp(data),
    dispatchWebhook(data),
  ]).catch(() => {});
}
