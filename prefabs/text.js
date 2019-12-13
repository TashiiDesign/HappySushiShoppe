// class Text
// {
//     constructor (ctx, x, y, string, style, origin)
// {
    
//     this.ctx    = ctx;

//     this.x      = x;
//     this.y      = y;

//     this.text   = string;

//     this.style  = this.initStyle(style);
//     this.origin = this.initOrigin(origin);

//     this.obj    = this.createText();
//     }

//     //init-------------------

//     initStyle   (key)
//     {
//         let style   = {
//             fontFamily  : 'Quicksand',
//             fontSize    : 14,
//             color       : '0xFFFFFF',
//             align       : 'center'
//         };

//         switch (key.toLowerCase())
//         {
//             case 'title':
//                 style.fontSize = 32;
//                 break;
//             case 'preload':
//                 style.fontSize = 24;
//                 break;
//         }
//         return style;
//     }

//     initOrigin  (key)
//     {
//         if (typeof origin === 'number')
//         {
//             return {
//                 x   : origin,
//                 y   : origin
//             };
//         }

//         else if (typeof origin === 'object')
//         {
//             return origin;
//         }
//         else 
//         {
//             return {
//                 x   : 0.5,
//                 y   :0.5
//             };
//         }
//         }

//     }
//         //Text object
//     createText()
//     {
//         let object = this.ctx.add.bitmapText();

//     }

//     destroy()
//     {

//     }
// }