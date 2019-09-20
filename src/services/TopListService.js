import Api from "@/services/Api";

export default {
  getTopList(listSize = 50) {
    return Api().get("/top.json?count=" + listSize);
  }
};
