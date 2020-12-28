# zeditor
## 项目缘由
这个项目源于公司的一个需求。当时公司购进了一个控件，用来在线编辑word文档，但是控件是基于微软的Active X的，只能使用于IE浏览器和windows系统，而且体育非常查，考察了一下别的在线文档，因为涉及到很多公司的业务，客户也不太愿意使用第三方在线文档。因此我直接便萌发了写一个web版的word文档编辑器。
## 造轮子？！
web版word编辑器从整个功能需求来说，大概分为两个部分，第一个是word文档数据和web的标签相互转换的引擎，第二个就是一个可视化的编辑器。对于可视化的文本编辑器，通过考察了一下目前市面上的各种在线文档工具，绝大部分是基于canvas的，另外金山文档是基于svg,只有石墨文档是基于普通的html标签，考虑的在常规的的需求中也能使用，所以决定使用基于普通html标签的富文本编辑器来展示word的内容。

方案决定后，最初是想通过集成某一款社区开源的富文本编辑器，比如所WangEditor，
但是通过阅读源码后得知，现在社区开源的富文本编辑器，90%以上的都是基于execCommand命令来说实现对文档的操作，
这种方式最大的好处就是浏览器本身就支持，提供状态管理，可以很方便的解决编辑过程中的撤销和重做，但是另一个非常令人
头疼的问题就是各种浏览器实现后产生的代码是不一致的，这就导致原始数据遭到破坏，一旦和word文档进行数据转换的时候还得
去做很多数据方便的兼容维护，另外execCommand这个接口W3C已经将其标识为弃用，未来将不再提供支持。其他的不是基于execCommand
的富文本编辑器，基本上都是采用react技术栈来实现，而我本人则更倾向于开发一个可以应用于各种技术栈的富文本编辑器，所以就选择了
造轮子的这个很无奈的选项，采用基于html5的Range和Selection接口来从零开始实现一个符合自己需求的富文本编辑器。

于是便有这个项目的诞生。


