try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".portal", html).each(function () {
        const name = $(this).find("a").attr("title");
        const url = $(this).find("a").attr("href");
        const image = $(this).find("a > img").attr("data-src");
        thumbnails.push({
          name: name,
          url: "https://demon-slayer-api.onrender.com/v1" + url.split("/wiki")[1],
          image: image,
        });
      });
    
        resp.status(200).json(thumbnails);
      
    });
  } catch (err) {
    resp.status(500).json(err);
  }