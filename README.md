# Multi-Business-Form

# 设计思想
> 鉴于不同游戏业务的不同内容形式下有着不同的表单渲染需求，但同时又有着许多渲染的共性。故基于该问题设计了以下方案：
> 1. 利用schema管理各业务线，各类型的渲染数据对象。
> 2. 在form-item-component中设计工厂组件，通过表单数据选择组件来渲染数据及额外操作。
> 3. 渲染过程：从表单接口/外部源拿到数据记录后，将单条记录的各字段，通过 统一的字段规则 渲染成表单数据对象数组，再在renderForm中以数据对象数组的各元素属性值渲染出不同的表单组件。
> 4. 后续对各业务的字段添加，调整，删除都可通过该表单schema的调整来进行。针对各游戏有各游戏的个性化逻辑、操作，将其封装到JS文件中，再导入到表单数据对象的extra属性中，传入工厂组件中，在工厂组件中拓展自己想要的渲染功能。

# 当前实现情况
> 实现了简单的不同表单数据对象与工厂组件之间的动态渲染。
> 验证了表单数据对象传入工厂组件中的属性中进行逻辑个性化定制操作、样式个性化定制的可行性。
> 当前以app.vue中的source定义一些测试的表单数据对象来进行渲染，目前实现了Input组件和PicUpload组件作为测试样例。
> 尚未实现从源数据->business-schema->表单数据对象数组的映射逻辑。


# 目录
## Src
###app.vue
>  ·获取到业务数据之后渲染到表单组件中。
>  ·从接口获取业务数据后，通过business-schema将各字段处理成表单源数据对象。

### component
> renderForm.vue
>  ·渲染组件容器
>  ·用props接受当前表单Item的数据数组currentForm作为渲染源数据
>  ·以component渲染每个item，props为传入子组件的属性，extra为需要传入子组件的自定义额外操作。

> form-item-components
>  ·存放用于渲染的工厂子组件，对于各子组件中：
>  ·propList为使用该组件必须传入的对象参数
>  ·extraOperation为需要进行额外操作的对象参数

### config
> business-schema.json
>  ·准入业务数据表单的json架构
>  ·以游戏名称作为一级映射筛选条件，内容类型作为二级映射筛选条件。

### lib
> register-component.js
>  ·全局注册组件函数，在文件中注册自定义Item组件之后即可全局使用该组件。



