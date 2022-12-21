/**
 * Author: Lakshman Veti
 * Type: MAP
 * Objective: Config Objects
 */

export const CONFIG = {
  current: "TEST",
  UDADebug: false,
  UDA_CONTAINER_CLASS: "udan-main-panel",
  UDA_CLICK_IGNORE_CLASS: "uda_exclude",
  UDA_DOMAIN: process.env.baseURL,
  UDA_API_URL: process.env.baseURL + "/voiceapi",
  UDASessionID: (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  ),
  UDA_POST_INTERVAL: 1000,
  UDALastMutationTime: 0,
  UDALogLevel: 0,
  RECORDING_IS_PLAYING: "udaIsPlaying",
  RECORDING_MANUAL_PLAY: "udaManualPlay",
  RECORDING_SWITCH_KEY: "recordingSwitch",
  RECORDING_SEQUENCE: "activeRecordingData",
  SELECTED_RECORDING: "selectedRecordedItem",
  USER_AUTH_DATA_KEY: "udaUserData",
  USER_SESSION_KEY: "udaSessionKey",
  UDAKeyCloakKey: "UDAKeyCloak",
  USER_SESSION_ID: "udaSessionId",
  SYNC_INTERVAL: 1000,
  AUTO_PLAY_SLEEP_TIME: 2000,
  JARO_WEIGHT: 0.95,
  JARO_WEIGHT_PERSONAL: 0.90,
  specialNodeKey: "UDASpecialNodes",
  enableInfiniteScroll: false,
  enableInfiniteScrollPageLength: 10,
  set Environment(value) {
    this.current = value.toString().toUpperCase();
    if (this.current === "PROD") {
      this.UDA_DOMAIN = "https://udan.nistapp.ai";
    } else {
      this.UDA_DOMAIN = "https://udantest.nistapp.ai";
    }
    this.UDA_API_URL = this.UDA_DOMAIN + "/voiceapi";
  },
  get Environment() {
    return this.current;
  },
  DEBOUNCE_INTERVAL: 2000,
  indexInterval: 1000,
  clickObjects: [],
  nodeId: 0,
  isRecording: false,
  htmlIndex: [],
  invokeTime: 1000,
  maxStringLength: 40,
  playNextAction: true,
  navigatedToNextPage: {check: false, url: ''},
  ignoreElements: ["script", "h1", "h2", "h3", "link", "noscript", "style"],
  ignoreAttributes: [
    'translate', 'draggable', 'spellcheck', 'tabindex', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth',
    'offsetHeight', 'offsetLeft', 'offsetTop', 'offsetWidth', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth',
    'baseURI', 'isConnected', 'ariaPressed', 'aria-pressed', 'nodePosition', 'outerHTML', 'innerHTML', 'style',
    'aria-controls', 'aria-activedescendant', 'ariaExpanded', 'autocomplete', 'aria-expanded', 'aria-owns', 'formAction',
    'ng-star-inserted', 'ng-star', 'aria-describedby', 'width', 'height', 'x', 'y', 'selectionStart', 'selectionEnd', 'required', 'validationMessage', 'selectionDirection',
    'naturalWidth', 'naturalHeight', 'complete', '_indexOf', 'value', 'defaultValue', 'min', 'max', 'nodeInfo', 'data-tooltip-id', 'addedclickrecord', 'checked', 'data-tribute',
    'hasclick', 'addedClickRecord', 'hasClick', 'valueAsNumber'
  ],
  innerTextWeight: 5,
  ignoreNodesFromIndexing: ['ng-dropdown-panel', 'ckeditor', 'fusioncharts', 'ngb-datepicker', 'ngx-daterangepicker-material', 'uda-panel', 'mat-datepicker-content', 'ng-select'],
  ignoreNodesContainingClassNames: ['cke_dialog_container', 'cke_notifications_area', 'gldp-default', 'ajs-layer', 'aui-list', 'herknl', 'jstBlock'],
  cancelRecordingDuringRecordingNodes: [],
  addClickToSpecialNodes: ['ng-select', 'ngb-datepicker'],
  ignoreClicksOnSpecialNodes: ['ngx-daterangepicker-material'],
  customNameForSpecialNodes: {
    'ngb-datepicker': 'Date selector',
    'mat-datepicker-content': 'Date selector',
    'ngx-daterangepicker-material': 'Date Range Selector'
  },
  specialInputClickClassNames: ['ghx-dropdown-trigger', 'aui-list'],
  tooltipDisplayedNodes: [],
  // replay variables
  autoplayCompleted: false,
  autoplayPaused: false,
  // manual click variables
  invokedActionManually: false,
  // personal node ignore attributes
  personalNodeIgnoreAttributes: [
    "innerText",
    "innerHTML",
    "outerText",
    "outerHTML",
    "nodeValue",
    "src",
    "naturalWidth",
    "naturalHeight",
    "currentSrc",
  ],
  //Azure content moderator attributes
  profanity: {
    enabled: true,
    provider: "azure",
    config: {
      key1: process.env.profanityKey,
      key2: process.env.profanityKey,
      endPoint: process.env.profanityUrl,
      region: process.env.profanityRegion,
    },
  },
  multilingual: {
    enabled: false,
    searchInLang: "en-US",
    selectedLang: "en-US",
    displayText: "",
    translatedText: "",
    translate: {
      provider: "google",
      apikey: process.env.googleTranslateApiKey,
      translateTo: "en",
      apiurl: process.env.googleTranslateUrl,
    },
  },
  // BCP list of languages
  bcpLang: [
    ["Afrikaans", ["af-ZA"]],
    ["አማርኛ", ["am-ET"]],
    ["Azərbaycanca", ["az-AZ"]],
    ["বাংলা", ["bn-BD", "বাংলাদেশ"], ["bn-IN", "ভারত"]],
    ["Bahasa Indonesia", ["id-ID"]],
    ["Bahasa Melayu", ["ms-MY"]],
    ["Català", ["ca-ES"]],
    ["Čeština", ["cs-CZ"]],
    ["Dansk", ["da-DK"]],
    ["Deutsch", ["de-DE"]],
    [
      "English",
      ["en-AU", "Australia"],
      ["en-CA", "Canada"],
      ["en-IN", "India"],
      ["en-KE", "Kenya"],
      ["en-TZ", "Tanzania"],
      ["en-GH", "Ghana"],
      ["en-NZ", "New Zealand"],
      ["en-NG", "Nigeria"],
      ["en-ZA", "South Africa"],
      ["en-PH", "Philippines"],
      ["en-GB", "United Kingdom"],
      ["en-US", "United States"],
    ],
    [
      "Español",
      ["es-AR", "Argentina"],
      ["es-BO", "Bolivia"],
      ["es-CL", "Chile"],
      ["es-CO", "Colombia"],
      ["es-CR", "Costa Rica"],
      ["es-EC", "Ecuador"],
      ["es-SV", "El Salvador"],
      ["es-ES", "España"],
      ["es-US", "Estados Unidos"],
      ["es-GT", "Guatemala"],
      ["es-HN", "Honduras"],
      ["es-MX", "México"],
      ["es-NI", "Nicaragua"],
      ["es-PA", "Panamá"],
      ["es-PY", "Paraguay"],
      ["es-PE", "Perú"],
      ["es-PR", "Puerto Rico"],
      ["es-DO", "República Dominicana"],
      ["es-UY", "Uruguay"],
      ["es-VE", "Venezuela"],
    ],
    ["Euskara", ["eu-ES"]],
    ["Filipino", ["fil-PH"]],
    ["Français", ["fr-FR"]],
    ["Basa Jawa", ["jv-ID"]],
    ["Galego", ["gl-ES"]],
    ["ગુજરાતી", ["gu-IN"]],
    ["Hrvatski", ["hr-HR"]],
    ["IsiZulu", ["zu-ZA"]],
    ["Íslenska", ["is-IS"]],
    ["Italiano", ["it-IT", "Italia"], ["it-CH", "Svizzera"]],
    ["ಕನ್ನಡ", ["kn-IN"]],
    ["ភាសាខ្មែរ", ["km-KH"]],
    ["Latviešu", ["lv-LV"]],
    ["Lietuvių", ["lt-LT"]],
    ["മലയാളം", ["ml-IN"]],
    ["मराठी", ["mr-IN"]],
    ["Magyar", ["hu-HU"]],
    ["ລາວ", ["lo-LA"]],
    ["Nederlands", ["nl-NL"]],
    ["नेपाली भाषा", ["ne-NP"]],
    ["Norsk bokmål", ["nb-NO"]],
    ["Polski", ["pl-PL"]],
    ["Português", ["pt-BR", "Brasil"], ["pt-PT", "Portugal"]],
    ["Română", ["ro-RO"]],
    ["සිංහල", ["si-LK"]],
    ["Slovenščina", ["sl-SI"]],
    ["Basa Sunda", ["su-ID"]],
    ["Slovenčina", ["sk-SK"]],
    ["Suomi", ["fi-FI"]],
    ["Svenska", ["sv-SE"]],
    ["Kiswahili", ["sw-TZ", "Tanzania"], ["sw-KE", "Kenya"]],
    ["ქართული", ["ka-GE"]],
    ["Հայերեն", ["hy-AM"]],
    [
      "தமிழ்",
      ["ta-IN", "இந்தியா"],
      ["ta-SG", "சிங்கப்பூர்"],
      ["ta-LK", "இலங்கை"],
      ["ta-MY", "மலேசியா"],
    ],
    ["తెలుగు", ["te-IN"]],
    ["Tiếng Việt", ["vi-VN"]],
    ["Türkçe", ["tr-TR"]],
    ["اُردُو", ["ur-PK", "پاکستان"], ["ur-IN", "بھارت"]],
    ["Ελληνικά", ["el-GR"]],
    ["български", ["bg-BG"]],
    ["Pусский", ["ru-RU"]],
    ["Српски", ["sr-RS"]],
    ["Українська", ["uk-UA"]],
    ["한국어", ["ko-KR"]],
    [
      "中文",
      ["cmn-Hans-CN", "普通话 (中国大陆)"],
      ["cmn-Hans-HK", "普通话 (香港)"],
      ["cmn-Hant-TW", "中文 (台灣)"],
      ["yue-Hant-HK", "粵語 (香港)"],
    ],
    ["日本語", ["ja-JP"]],
    ["हिन्दी", ["hi-IN"]],
    ["ภาษาไทย", ["th-TH"]],
  ],
  // Flag to enable node type detection
  enableNodeTypeChangeSelection: true,
  set enableNodeTypeSelection(val) {
    this.enableNodeTypeChangeSelection = val;
    // this.showhtml();
  },
  get enableNodeTypeSelection() {
    return CONFIG.multilingual.enabled;
  },
  cspUserAcceptance: {
    storageName: "uda-csp-user-consent",
    data: {proceed: true},
  },
  screenAcceptance: {
    storageName: "uda-user-screen-consent",
    data: {proceed: true},
  }
};
