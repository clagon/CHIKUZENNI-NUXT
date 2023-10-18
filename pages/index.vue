<template>
  <ChikuzenniHeader />
  <div class="container">
    <grid-left class="left">
      <p class="left_txt">筑前煮で</p>
      <p class="left_txt">より良い未来を</p>
    </grid-left>
    <grid-right>
      <p class="saa">さぁ, はじめよう</p>
      <LinkButton text="学生の方" path="/student" />
      <LinkButton text="教職員の方" path="/teacher" />
    </grid-right>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns : 60% 40%;
  height: 100%;
  width: 100%;
}
.left_txt{
  font-size: 48px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1rem;
}
.saa{
  font-size: 48px;
  font-weight: 600;
  color: var(--black);
  margin-bottom: 1rem;
}
@media screen and (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left_txt{
    font-size: 32px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 1rem;
  }
  .saa{
    font-size: 32px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 1rem;
  }
}
</style>
