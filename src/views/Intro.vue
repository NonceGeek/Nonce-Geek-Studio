<template>
  <div class="intro">
    <div class="header">
      <div class="main">Nonce Geek Studio</div>
      <div class="sub">——构建下一代区块链基础设施</div>
    </div>
    <div class="section">
      <div class="section-name">我们的认知</div>
      <p class="para">公链领域中， Ethereum、Substrate、Avalanche 等公链框架在成为下一区块链框架的道路上前行。</p>
      <p class="para">联盟链领域中，FISCO BCOS 等联盟链框架在成为下一代区块链框架的道路上前行。</p>
      <p class="para">在下一代区块链框架这件事上，我们难以预测未来。</p>
      <p class="para">我们认为，相对而言，「下一代区块链基础设施」的未来更加明晰。</p>
      <p class="para">下一代区块链基础设施将具备如下特征：</p>
      <ul>
        <li class="list">超强通用型</li>
      </ul>
      <p class="para">与Ethereum、Substrate等公链、FISCO BCOS 等联盟链兼容</p>
      <ul>
        <li class="list">函数式编程焕发生命力</li>
      </ul>
      <p class="para">函数式编程与区块链更配</p>
      <ul>
        <li class="list">下一代区块链基础设施是区块链世界的重要组成部分</li>
      </ul>
      <p class="para">多个公链将会共用一套基础设施！典型的例子：Metamask</p>
      <ul>
        <li class="list">给上层的无限想象与无限商业空间提供支撑</li>
      </ul>
      <p class="para">有了工具箱，我们才能构建出 Amazing 的产品</p>
    </div>
    <div class="section">
      <div class="section-name">原则</div>
      <p class="para">在构建下一代区块链基础设施的时候，我们遵循如下的「Principles」：</p>
      <ul>
        <li class="list">不迎合热点</li>
      </ul>
      <p class="para">我们不会为了迎合热点去随便成立一个项目。有时候看似我们的项目追上了热点，其实是因为我们的战略方向刚好和热点一致：）</p>
      <ul>
        <li class="list">反共识</li>
      </ul>
      <p class="para">我们构建的区块链基础设施可能在现在是「反共识」的。例如很多公链开发者认为联盟链是伪命题，但我们认为基础设施兼容联盟链和公链是必要的。</p>
      <ul>
        <li class="list">谨慎</li>
      </ul>
      <p class="para">就像巴菲特认为假设一生只投资二十次。同样的，我们公布项目的时候也会非常谨慎！我们只公布我们认为极具价值的且我们会100%投入的项目！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;

  .main {
    font-size: 30px;
    font-weight: bolder;
  }

  .sub {
    font-size: 20px;
    margin-top: 10px;
  }
}

.section {
  .section-name {
    font-size: 18px;
    font-weight: bolder;
    padding: 26px 0 15px;
  }
}
</style>
