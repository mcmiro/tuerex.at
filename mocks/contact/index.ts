import Phone from '../../assets/icons/contact-phone.svg';
import Mail from '../../assets/icons/contact-mail.svg';
import Calender from '../../assets/icons/contact-calender.svg';

export const contactData = [
  {
    title: '+43 999 99 99',
    subtitle: '(Mo-Fr, 8:00 - 17:00 Uhr)',
    icon: Phone,
    actions: [
      {
        actionName: 'Beratungstermin',
        actionType: '',
        actionContent: '',
        redirect: 'https://türex,at',
      },
    ],
  },
  {
    title: 'info@türex.at',
    subtitle: '',
    icon: Mail,
    actions: [
      {
        actionName: 'E-Mail senden',
        actionType: 'mailto',
        actionContent: 'info@türex.at',
        redirect: '',
      },
    ],
  },
  {
    title: 'Showroom',
    subtitle: '',
    icon: Calender,
    actions: [{ actionName: 'Lorem', redirect: 'showroom' }],
  },
];
