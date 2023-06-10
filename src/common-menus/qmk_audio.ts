import {VIAMenu} from '../menu-types';

export const qmk_audio: VIAMenu[] = [
  {
    label: '音频',
    content: [
      {
        label: '基本设置',
        content: [
          {
            label: '音频启用',
            type: 'toggle',
            content: ['id_qmk_audio_enable', 4, 1],
          },
          {
            label: '点击音效启用',
            type: 'toggle',
            content: ['id_qmk_audio_clicky_enable', 4, 2],
          },
        ],
      },
    ],
  },
];
