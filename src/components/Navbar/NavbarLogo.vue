<template>
  <div id="logo">
    <span>MARVEL</span>
  </div>
</template>

<style scoped lang="scss">
#logo {
  font-size: 20px;
  font-weight: 900;
  color: $on-primary;
  background-color: $primary;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  font-size: 1.2em;
  margin-right: 1rem;

  & > span {
    transform: scaleY(2);
    letter-spacing: -1px;
    user-select: none;
  }
}
</style>
