const API_END_POINT =
  'http://openapi.seoul.go.kr:8088/6e47477170726f75383154744b5342/json/culturalEventInfo/1/5/클래식';
// 'http://openapi.seoul.go.kr:8088/6e47477170726f75383154744b5342/json/culturalSpaceInfo/1/5/';
export const request = async (url, options = {}) => {
  try {
    const fullurl = `${API_END_POINT}`;
    const res = await axios.get(fullurl);
    return res && res;
  } catch (e) {
    alert(e.message);
  }
};
// CODENAME: "클래식"
// DATE: "2022-04-07~2022-04-07"
// END_DATE: "2022-04-07 00:00:00.0"
// ETC_DESC: ""
// MAIN_IMG: "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=465d6772bbd74978aa8370b4e9f7f9dc&thumb=Y"
// ORG_LINK: "https://www.gdfac.or.kr/web/lay2/program/S1T204C211/show/view.do?show_seq=1789&cpage=1&rows=10&keyword=&place=&start_dt=&end_dt="
// ORG_NAME: "강동문화재단"
// PLACE: "강동아트센터 스튜디오#1"
// PLAYER: ""
// PROGRAM: ""
// RGSTDATE: "2022-02-23"
// STRTDATE: "2022-04-07 00:00:00.0"
// THEMECODE: "기타"
// TICKET: "기관"
// TITLE: "브런치 콘서트<낭만드림-낭만 모차르트1>"
// USE_FEE: "전석 10,000원"
// USE_TRGT: "전체관람가"
