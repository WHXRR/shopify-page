export default `
a {
  text-decoration: none;
}
.columns-1 > * {
  width: initial;
}
.columns-2 > * {
  max-width: 50% !important;
  flex: 1 !important;
}
.columns-3 > * {
  max-width: 33.33% !important;
  flex: 1 !important;
}
.columns-4 > * {
  max-width: 25% !important;
  flex: 1 !important;
}
.columns-5 > * {
  max-width: 20% !important;
  flex: 1 !important;
}
.container-default {
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  background-color: #eceff7;
  color: #000000;
  flex-direction: row;
  flex: unset;
  align-items: initial;
  justify-content: initial;
  width: 100%;
  height: auto;
  border-width: 0;
  border-color: #000000;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-style: solid;
  flex-wrap: nowrap;
  display: flex;
  max-width: 1200px;
  row-gap: 0;
  column-gap: 0;
  box-sizing: border-box;
}
.button-default {
  cursor: pointer;
  width: auto;
  height: auto;
  max-width: initial;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  color: #ffffff;
  background-color: #6366f1;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  flex: unset;
  align-items: initial;
  justify-content: initial;
  border-width: 0;
  border-color: #000000;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-style: solid;
  box-sizing: border-box;
}
.text-default {
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  color: inherit;
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  line-height: 1.3;
  box-sizing: border-box;
}
.img-default {
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
  box-sizing: border-box;
}
.img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
.product-qty {
  display: flex;
}
.product-ipt {
  width: 55px;
  text-align: center;
  font-size: 14px;
  color: #333232;
  padding: 0 5px;
  font-weight: bold;
  border: 1px solid #d7dbdb;
}
.product-minus {
  cursor: pointer;
  width: 45px;
  height: 35px;
  border: 1px solid #d7dbdb;
  border-right: none;
  border-radius: 13px 0px 0px 13px;
  background: url(https://cdn.shopify.com/s/files/1/0262/9337/0964/t/3/assets/minus.png) #fff no-repeat center center;
}
.product-plus {
  cursor: pointer;
  width: 45px;
  height: 35px;
  border: 1px solid #d7dbdb;
  border-left: none;
  border-radius: 0px 13px 13px 0;
  background: url('https://cdn.shopify.com/s/files/1/0262/9337/0964/t/3/assets/plus.png') #fff no-repeat center center;
}
.beat {
  animation: beat 1.5s infinite;
  animation-timing-function: ease-in;
  transition: .2s;
}
@keyframes beat {
  15% {
    transform: translateY(0);
    box-shadow: 0px 0px 0px 0px transparent;
  }
  35% {
    transform: translateY(-35%);
    box-shadow: 0px 8px 5px -5px rgba(0, 0, 0, 0.25);
  }
  45% {
    transform: translateY(0%);
    box-shadow: 0px 0px 0px 0px transparent;
  }
  55% {
    transform: translateY(-20%);
    box-shadow: 0px 5px 4px -4px rgba(0, 0, 0, 0.25);
  }
  70% {
    transform: translateY(0%);
    box-shadow: 0px 0px 0px 0px transparent;
  }
  80% {
    transform: translateY(-10%);
    box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.25);
  }
  90% {
    transform: translateY(0%);
    box-shadow: 0px 0px 0px 0px transparent;
  }
  95% {
    transform: translateY(-2%);
    box-shadow: 0px 2px 3px -3px rgba(0, 0, 0, 0.25);
  }
  99% {
    transform: translateY(0%);
    box-shadow: 0px 0px 0px 0px transparent;
  }
  100% {
    transform: translateY(0);
    box-shadow: 0px 0px 0px 0px transparent;
  }
}
@media (min-width: 768px) {
  .hidden-pc {
    display: none !important;
  }
}
@media (max-width: 480px) {
  .hidden-xs {
    display: none !important;
  }
  .columns-2, .columns-3, .columns-4, .columns-5 {
    flex-wrap: wrap !important;
  }
  .columns-2 > *, .columns-3 > *, .columns-4 > * ,.columns-5 > * {
    width: 100% !important;
    max-width: 100% !important;
    flex: initial !important;
  }
}
`
