<template>
  <div id="img" class="loading"></div>

  <div id="info">
    <div id="title" class="loading"></div>
    <div id="creators" class="loading"></div>
  </div>
</template>

<style scoped lang="scss">
#img {
  aspect-ratio: 2/3;
}

#info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

#title {
  height: 14px;
  width: 100%;
}

#creators {
  height: 10px;
  width: 60%;
}

.loading {
  background: rgba(179, 179, 179, 1);
  background: linear-gradient(
    to right,
    rgba(233, 233, 233, 1) 0%,
    rgb(221, 221, 221) 30%,
    rgba(233, 233, 233, 1) 60%
  );
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: loadingBackground;
  animation-timing-function: linear;
  background-size: 1000px 640px;
  position: relative;
}

@keyframes loadingBackground {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
