/**
 * Techyora Automated Enquiry Dispatch Configuration
 * 
 * This file centralizes the credentials and endpoints for automated
 * email and WhatsApp notifications whenever a visitor submits an enquiry.
 */

export const NOTIFICATION_CONFIG = {
  // Target recipient email
  targetEmail: 'connect.techyora@gmail.com',

  // Target WhatsApp phone number (in international format without + or spaces)
  targetWhatsAppPhone: '919524227511',

  /**
   * 1. EMAIL SERVICE INTEGRATION
   * Option A: Web3Forms (Recommended - Free 250 submissions/mo, high deliverability, no activation delays)
   * Get free key at https://web3forms.com (takes 10 seconds, enter connect.techyora@gmail.com)
   */
  web3FormsAccessKey: '98a3a569-4680-47f1-8b00-3c4b9e96fc24',

  /**
   * 2. WHATSAPP AUTOMATED NOTIFICATION (CallMeBot API)
   * CallMeBot allows sending automated WhatsApp messages directly to your phone.
   * How to get your free API key in 30 seconds:
   * 1. Add +34 611 021 695 (or +34 644 63 46 22) to your phone contacts on WhatsApp.
   * 2. Send the message: "I allow callmebot to send me messages"
   * 3. The bot will instantly reply with your personal API key (e.g. "123456").
   * 4. Paste that number below:
   */
  callMeBotApiKey: '', // e.g. '123456'

  /**
   * 3. UNIFIED AUTOMATION WEBHOOK (Optional - Make.com / Pabbly / Zapier)
   * If you prefer using Make.com or Pabbly Connect to dispatch both Email + WhatsApp:
   * Paste your free webhook URL here.
   */
  webhookUrl: '', // e.g. 'https://hook.eu1.make.com/xxxxxxxxxxxxxxxx'

  /**
   * 4. TELEGRAM BOT (Optional instant backup alert)
   * Free, instant, zero limits.
   */
  telegram: {
    botToken: '',
    chatId: ''
  }
};
