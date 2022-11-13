/**
 * 根据id计算颜色
 * @param {String} id
 */
export function getColor(id) {
  const colorList = ['#33a3ff', '#ffbb29', '#86c752', '#666bff', '#bf5ccc'];
  const color = colorList[id % 5];
  return color;
}
