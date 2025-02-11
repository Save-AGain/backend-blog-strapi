module.exports = {
    async afterFindMany(event) {
      for (let tag of event.result) {
        tag.blogCount = await strapi.db.query('api::blog.blog').count({
          where: { tags: tag.id }
        });
      }
    }
  };
  