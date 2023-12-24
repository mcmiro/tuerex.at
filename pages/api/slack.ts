import axios from 'axios';

export default async (req: any, res: any) => {
  try {
    const slackWebhookUrl = process.env.NEXT_PUBLIC_SLACK_URL;

    const message = {
      text: req.body.text || 'New user is visiting the page!',
    };

    await axios.post(slackWebhookUrl!, message);

    res
      .status(200)
      .json({ success: true, message: 'Message sent to Slack successfully' });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    res
      .status(500)
      .json({ success: false, message: 'Error sending message to Slack' });
  }
};
