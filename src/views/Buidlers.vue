<template>
  <div class="buidlers">
    <div class="buidler-list">
      <a-card
        class="buidler"
        v-for="buidler in buidlers"
        :key="buidler.name"
        :title="buidler.name"
        hoverable
      >
        <img class="logo" :src="buidler.logo" alt="">
        <span class="intro">{{ buidler.intro }}</span>
        <span class="github">
          GitHub: <a :href="buidler.github">{{ buidler.github }}</a>
        </span>
        <span class="articles">
          Articles:
          <a
            class="article"
            v-for="article in buidler.articles"
            :key="article.url"
            :href="article.url"
          >{{ article.title }}</a>
        </span>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buidlers',
  data() {
    return {
      buidlers: [
        {
          name: 'WANGNINGBO',
          logo: 'https://via.placeholder.com/150',
          intro: 'BalaBala',
          github: 'https://github.com/hqwangningbo',
          articles: [
            {
              title: '从比特币到以太坊到波卡',
              url: 'https://zhuanlan.zhihu.com/p/341318279',
            },
            {
              title: '为什么我们需要波卡？波卡的跨链网络效应是什么？',
              url: 'https://www.zvstus.com/article/news/1/75d87ffffe85571af600e15826a50000.html',
            },
          ],
        },
        {
          name: 'WANGNINGBO',
          logo: 'https://via.placeholder.com/150',
          intro: 'BalaBala',
          github: 'https://github.com/hqwangningbo',
          articles: [
            {
              title: '从比特币到以太坊到波卡',
              url: 'https://zhuanlan.zhihu.com/p/341318279',
            },
            {
              title: '为什么我们需要波卡？波卡的跨链网络效应是什么？',
              url: 'https://www.zvstus.com/article/news/1/75d87ffffe85571af600e15826a50000.html',
            },
          ],
        },
        {
          name: 'WANGNINGBO',
          logo: 'https://via.placeholder.com/150',
          intro: 'BalaBala',
          github: 'https://github.com/hqwangningbo',
          articles: [
            {
              title: '从比特币到以太坊到波卡',
              url: 'https://zhuanlan.zhihu.com/p/341318279',
            },
            {
              title: '为什么我们需要波卡？波卡的跨链网络效应是什么？',
              url: 'https://www.zvstus.com/article/news/1/75d87ffffe85571af600e15826a50000.html',
            },
          ],
        },
        {
          name: 'WANGNINGBO',
          logo: 'https://via.placeholder.com/150',
          intro: 'BalaBala',
          github: 'https://github.com/hqwangningbo',
          articles: [
            {
              title: '从比特币到以太坊到波卡',
              url: 'https://zhuanlan.zhihu.com/p/341318279',
            },
            {
              title: '为什么我们需要波卡？波卡的跨链网络效应是什么？',
              url: 'https://www.zvstus.com/article/news/1/75d87ffffe85571af600e15826a50000.html',
            },
          ],
        },
        {
          name: 'WANGNINGBO',
          logo: 'https://via.placeholder.com/150',
          intro: 'BalaBala',
          github: 'https://github.com/hqwangningbo',
          articles: [
            {
              title: '从比特币到以太坊到波卡',
              url: 'https://zhuanlan.zhihu.com/p/341318279',
            },
            {
              title: '为什么我们需要波卡？波卡的跨链网络效应是什么？',
              url: 'https://www.zvstus.com/article/news/1/75d87ffffe85571af600e15826a50000.html',
            },
          ],
        },
        {
          name: 'WANGNINGBO',
          logo: 'https://via.placeholder.com/150',
          intro: 'BalaBala',
          github: 'https://github.com/hqwangningbo',
          articles: [
            {
              title: '从比特币到以太坊到波卡',
              url: 'https://zhuanlan.zhihu.com/p/341318279',
            },
            {
              title: '为什么我们需要波卡？波卡的跨链网络效应是什么？',
              url: 'https://www.zvstus.com/article/news/1/75d87ffffe85571af600e15826a50000.html',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.buidler-list {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .buidler {
    width: 32%;
    margin-top: 20px;

    ::v-deep .ant-card-body {
      display: flex;
      flex-direction: column;

      .logo {
        width: 150px;
        margin: 0 auto;
      }

      .intro, .github {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .articles {
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        .article {
          margin-top: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      // TODO: 如果设置 a 标签的父元素只占一行
      // 则 a 标签之后的 … 字符和 a 标签样式不一致
      // 如果像下面这样设置 a 标签只占一行就更不行了
      // https://stackoverflow.com/questions/34294054/how-to-implement-single-line-ellipsis-with-css
      // .github>a {
      //   display: block;
      //   white-space: nowrap;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      // }
    }
  }
}
</style>
