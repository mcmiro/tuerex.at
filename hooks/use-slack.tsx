import useSlackStore from 'store/slack-store';

const useSlack = () => {
  const { updateSlackValue } = useSlackStore();

  const sendMessageToSlack = async (message: string) => {
    try {
      const response = await fetch('/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        updateSlackValue(true);
      }
    } catch (error) {
      console.error('Error sending message to Slack:', error);
    }
  };

  const getTimeStampNow = () => {
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Europe/Vienna',
      hour12: false,
    };

    const germanDateTime = new Intl.DateTimeFormat('de-DE', options).format(
      now
    );
    return germanDateTime;
  };

  return {
    sendMessageToSlack,
    getTimeStampNow,
  };
};

export default useSlack;
