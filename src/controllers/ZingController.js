const { ZingMp3 } = require("zingmp3-api-full");

class ZingController {
  getSong(req, res) {
    ZingMp3.getSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getDetailPlaylist(req, res) {
    ZingMp3.getDetailPlaylist(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getHome(req, res) {
    ZingMp3.getHome().then((data) => {
      res.json(data);
    });
  }

  getTop100(req, res) {
    ZingMp3.getTop100().then((data) => {
      res.json(data);
    });
  }

  getChartHome(req, res) {
    ZingMp3.getChartHome().then((data) => {
      res.json(data);
    });
  }

  getNewReleaseChart(req, res) {
    ZingMp3.getNewReleaseChart().then((data) => {
      res.json(data);
    });
  }

  getInfo(req, res) {
    ZingMp3.getInfoSong(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getArtist(req, res) {
    ZingMp3.getArtist(req.query.name).then((data) => {
      res.json(data);
    });
  }

  getArtistSong(req, res) {
    ZingMp3.getListArtistSong(
      req.query.id,
      req.query.page,
      req.query.count
    ).then((data) => {
      res.json(data);
    });
  }

  getLyric(req, res) {
    ZingMp3.getLyric(req.query.id).then((data) => {
      res.json(data);
    });
  }

  search(req, res) {
    ZingMp3.search(req.query.keyword).then((data) => {
      res.json(data);
    });
  }

  getListMV(req, res) {
    ZingMp3.getListMV(req.query.id, req.query.page, req.query.count).then(
      (data) => {
        res.json(data);
      }
    );
  }

  getCategoryMV(req, res) {
    ZingMp3.getCategoryMV(req.query.id).then((data) => {
      res.json(data);
    });
  }

  getVideo(req, res) {
    ZingMp3.getVideo(req.query.id).then((data) => {
      res.json(data);
    });
  }

  async RelatedSong(req, res) {
    const response = await fetch(
      "http://mp3.zing.vn/xhr/recommend?" +
        new URLSearchParams({
          type: "audio",
          id: req.query.id,
        })
    );
    const jsonData = await response.json();
    res.json(jsonData);
  }
  async suggestSearch(req, res) {
    const response = await fetch(
      "https://ac.zingmp3.vn/v1/web/ac-suggestions?" +
        new URLSearchParams({
          num: 10,
          query: req.query.query,
          language: "vi",
        })
    );
    const jsonData = await response.json();
    res.json(jsonData);
  }
}

module.exports = new ZingController();
