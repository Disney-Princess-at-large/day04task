<template>
    <div>
        <div>
            <p>国内网站粉丝数量：{{num | Fens(10000)}}</p>
            <p>国外网站粉丝数量：{{num | Fens(1000)}}</p>
        </div>
        <div>
            <p>时间：{{date | fomatDate('-')}}</p>
            <p>时间：{{date | fomatDate('/')}}</p>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name:"VueFilter",
        data(){
            return{
                num:1876986,
                date:new Date(),
            }
        },
        filters:{
            Fens:(val,i) =>{
                let str = '';
                if(i ==10000){
                    str ='万'
                }else if(i ==1000){
                    str ='千'
                }
                 return val/i + str
            },
            fomatDate:(val,i) => {                
                return moment(val).format(`YYYY${i}MM${i}DD`)                
            }
            
        }

    }
</script>

<style>

</style>