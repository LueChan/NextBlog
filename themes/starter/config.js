/**
 * 另一个落地页主题
 */
const CONFIG = {

  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '深入浅出HarmonyOS应用开发', // 英雄区文字
  STARTER_HERO_TITLE_2: '写给有移动应用开发经验的从业者', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始了解', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://www.luechan.com/archive', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://pic.imgdb.cn/item/65edc34a9f345e8d035f6223.jpg', // 产品预览图 ，默认读取public目录下图片

  STARTER_NAV_BUTTON_2_TEXT: '订阅',
  STARTER_NAV_BUTTON_2_URL: 'https://www.luechan.com/rss/feed.xml',
  
  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '', // 特性
  STARTER_FEATURE_TEXT_1: '关键特性', // 特性
  STARTER_FEATURE_TEXT_2: '从ArkTS、ArkUI、进阶、DFX几方面介绍鸿蒙应用开发', // 特性

  STARTER_FEATURE_1_TITLE_1: 'ArkTS', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'JS是TS的子集，TS是ArkTS的子集', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'ArkUI', // 特性2
  STARTER_FEATURE_2_TEXT_1: '常用容器组件、List组件、Grid组件等', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: 'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: '进阶之路', // 特性3
  STARTER_FEATURE_3_TEXT_1: '数据库、网络、三方库、Preferenes等', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'DFX能力', // 特性4
  STARTER_FEATURE_4_TEXT_1: '性能、功耗、一次开发，多段部署、自由流转、运维打点等', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // 特性4

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '',
  STARTER_BLOG_COUNT: 6, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最新文章',
  STARTER_BLOG_TEXT_2: '一些关于HarmonyOS的系列文章、开发动态等',

  STARTER_FOOTER_SLOGAN: '略馋，曾经养过的一只猫',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: '/about' },
        { TITLE: '帮助支持', URL: 'https://developer.huawei.com/consumer/cn/' }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        { TITLE: '应用开发', URL: 'https://developer.huawei.com/consumer/cn/doc/guidebook/harmonyecoapp-guidebook-0000001761818040' },
        { TITLE: '应用安全', URL: 'https://developer.huawei.com/consumer/cn/doc/guidebook/harmonyecoappsecurity-guidebook-0000001808819033' },
        { TITLE: '开发套件', URL: 'https://developer.huawei.com/consumer/cn/develop/' }
      ]
    },
    {
      TITLE: '开发认证',
      LINK_GROUP: [
        { TITLE: '什么是HarmonyOS', URL: 'https://developer.huawei.com/consumer/cn/training/course/video/101605600652198120' },
        { TITLE: '基础认证', URL: 'https://developer.huawei.com/consumer/cn/training/dev-cert-detail/101666948302721398' },
        { TITLE: '高级认证', URL: 'https://developer.huawei.com/consumer/cn/training/dev-cert-detail/101684223987951077' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  // STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  // STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  // STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  // STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  // STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  // STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://luechan.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
