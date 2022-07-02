<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.select" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="item.count <= 1 ? 1 : item.count--">-</span
          ><input
            type="text"
            v-model="item.count"
            @input="change(item, $event)"
            @click="select"
          /><span @click="item.count++">+</span>
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click.prevent="del(index)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click.prevent="delBtn">删除选中商品</button>
    <button @click.prevent="clearBtn">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计：</h2>
      <p>已经选中商品件数：{{ allCount }}</p>
      <p>总价：{{ allPrice }}</p>
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
      newList: [],
    }
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1)
    },
    // 清理购物车
    clearBtn() {
      this.list = []
    },

    // 输入框改变事件
    // 传入当前对象和事件对象
    change(ele, e) {
      // 获取输入框的内容并转换成数字类型-----若是数字则会转成NAN
      let num = +e.target.value
      // 获取修改的那条数组的索引
      let index = this.list.findIndex((item) => item.id == ele.id)
      //  判断输入的内容是否小于等于1   或者是否是NAN
      if (num <= 1 || isNaN(num)) {
        // 则强制为1
        e.target.value = 1
      }
      //  否则更新v-for
      this.$set(this.list[index], 'count', +e.target.value)
    },

    // 删除选中商品
    delBtn() {
      this.list = this.list.filter((item) => item.select === false)
    },

    select(e){
        e.target.select()
    }

  },

  computed: {
    isAll: {
      set(val) {
        this.list.forEach((item) => (item.select = val))
      },
      get() {
        if (this.list.length == 0) return false
        return this.list.every((item) => item.select)
      },
    },
    allCount() {
      return this.list.reduce((sum, item) => {
        if (item.select === true) {
          // 选中商品才累加数量
          sum += item.count
        }
        return sum
      }, 0)
    },
    allPrice() {
      return this.list.reduce((sum, item) => {
        if (item.select === true) {
          // 选中商品才累加数量
          sum += item.count * item.price
        }
        return sum
      }, 0)
    },
  },
}
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
.tb td span {
  cursor: pointer;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
