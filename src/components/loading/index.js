import { ElLoading } from 'element-plus';

const TIME = 1000;
const BACKGROUND = 'rgba(0, 0, 0, 0.4)';
const ICON = 'el-icon-loading';

/**
 * 默认样式加载框
 *
 * @param {string} text
 * @param {function} domain
 */
export function openFullScreen (text, domain) {
  const loading = ElLoading.service({
    lock: true,
    text: text,
    spinner: ICON,
    background: BACKGROUND,
  });
  setTimeout(() => {
    loading.close();
    domain();
  }, TIME);
};
/**
 * loading加载框，可设置时间
 *
 * @param {string} text
 * @param {function} domain
 * @param {int} time
 */
export function openFullScreenTime(text, domain, time) {
  openFullScreenBase(text, ICON, BACKGROUND, domain, time);
}

/**
 * loading加载框，可设置加载图标
 *
 * @param {string} text
 * @param {string} icon
 * @param {function} domain
 */
export function openFullScreenIcon(text, icon, domain) {
  openFullScreenBase(text, icon, BACKGROUND, domain, TIME);
}

/**
 * 自定义加载框
 *
 * @param {string} text 加载文字
 * @param {string} icon 加载显示图标
 * @param {string} bg 背景颜色
 * @param {function} domain 加载完成后调用的方法
 * @param {int} time 时间
 */
export function openFullScreenBase(text, icon, bg, domain, time) {
  const loading = ElLoading.service({
    lock: true,
    text: text,
    spinner: icon,
    background: bg,
  });
  setTimeout(() => {
    loading.close();
    domain();
  }, time);
};
