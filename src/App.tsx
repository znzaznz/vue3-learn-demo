import {defineComponent, ref} from "vue";
import {RouterView} from "vue-router";

export const App = defineComponent({
    setup(){
        const count = ref(0);
        const onClick = ()=>{
            count.value += 1;
        }

        return ()=>(<>
            <div>
                <router-link to={"/"}>home</router-link>
                <router-link to={"/about"}>about</router-link>
            </div>
            <RouterView />
        </>)
    }
})