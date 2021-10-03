<template>
  <div class="supporters">
    <div class="header">支持机构</div>
    <div class="supporter">
      <span class="logo">
        <img src="https://via.placeholder.com/100" alt="logo">
      </span>
      <span class="intro">上海对外经贸大学区块链 SIG</span>
    </div>
    <div class="supporter">
      <span class="logo">
        <img src="https://via.placeholder.com/100" alt="logo">
      </span>
      <span class="intro">南京大学金融x区块链 SIG</span>
    </div>
    <div class="supporter">
      <span class="logo">
        <img src="https://via.placeholder.com/100" alt="logo">
      </span>
      <span class="intro">微芒社区</span>
    </div>
    <div class="supporter">
      <span class="logo">
        <img src="https://via.placeholder.com/100" alt="logo">
      </span>
      <span class="intro">BeWater 开发者社区</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Supporters',
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
}

.supporter {
  margin-top: 30px;
  padding: 20px;
  display: flex;
  align-items: center;

  .logo {
    width: 80px;
    height: 80px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .intro {
    margin-left: 40px;
    font-size: 18px;
  }
}
</style>
