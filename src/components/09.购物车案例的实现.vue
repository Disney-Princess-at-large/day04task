
<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll"/>全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item,index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.select"/></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
        <span @click="item.count<=1 ? 1:item.count--">-</span>
        <input type="text" v-model.number="item.count" />
        <span @click="item.count++">+</span>
        </td>
        <td>{{item.price * item.count}}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delFn">删除选中商品</button>
    <button @click='clear'>清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{allCount}}</p>
      <p>总价{{allPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    list: [
    { id: 1, name: '奔驰', price: 312, count: 1, select: false },
    { id: 2, name: '宝马', price: 123, count: 1, select: false },
    { id: 3, name: '奥迪', price: 132, count: 1, select: false },
],
    };
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    delFn(){
    this.list=this.list.filter(item =>item.select ==false)
    },
    clear(){
      this.list=[]
    }
  },
  watch:{
    "list":{
    deep:true,
    handler(oldVal,newVal){
      console.log(oldVal,newVal);
        // if(item.count<=1){
        //     item.count=1
        // }
    }
    }
  },
 computed: {
     isAll:{
      set(val){
      this.list.forEach(ele =>ele.select = val)
      },
      get(){
      if(this.list.length==0) return false
      return this.list.every(ele =>ele.select)
      }
    },
    allCount(){
    return this.list.reduce((sum,item)=>{
    if(item.select === true){ // 选中商品才累加数量
     sum+=item.count
    }
    return sum
    },0)
    },
    allPrice(){
    return this.list.reduce((sum,item)=>{
    if(item.select === true){ // 选中商品才累加数量
     sum+=item.count * item.price
    }
    return sum
  },0)
 }
 }
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
