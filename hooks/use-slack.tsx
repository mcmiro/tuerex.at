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

  return {
    sendMessageToSlack,
  };
};

export default useSlack;
