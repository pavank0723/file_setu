export const swaggerCustomUI = `
:root {
  --post-color: #8C1911;
  --get-color: #EA291C;
  --get_id-color: #FFCC00;
  --put-color: #EE5449;
  --delete-color: #2C2C2C;
  --body-color: #FFEEE9;
  --topbar-color : #FFDFDD;
  --post-body-color : rgba(140, 25, 17, 0.1); 
  --get-body-color : rgba(234, 41, 28, 0.2);
  --put-body-color : rgba(238, 84, 73, 0.13);
  --delete-body-color : rgba(44, 44, 44, 0.18);
}
body {
  background:  var(--body-color);
}
.swagger-ui .topbar {
  background-color: var(--topbar-color);
}
.topbar-wrapper img {content:url(\'../assets/file_setu_logo.png\'); width:200px; height:auto;}

.swagger-ui .opblock.opblock-post {
  border-color: var(--post-color);
  background: var(--post-body-color)
}

.swagger-ui .opblock.opblock-get {
  border-color: var(--get-color);
  background: var(--get-body-color)
}

.swagger-ui .opblock.opblock-put {
  border-color: var(--put-color);
  background: var(--put-body-color)
}

.swagger-ui .opblock.opblock-delete {
  border-color: var(--delete-color);
  background: var(--delete-body-color)
}


.swagger-ui .opblock.opblock-patch {
  // border-color: #50e3c2;
  background: rgba(80, 227, 194, .1)
}


.swagger-ui .opblock.opblock-head {
  // border-color: #9012fe;
  background: rgba(144, 18, 254, .1)
}


.swagger-ui .opblock.opblock-options {
  // border-color: #0d5aa7;
  background: rgba(13, 90, 167, .1)
}

.swagger-ui .opblock.opblock-deprecated {
  opacity: .6;
  border-color: #ebebeb;
  background: hsla(0, 0%, 92%, .1)
}

.swagger-ui .opblock.opblock-deprecated .opblock-summary-method {
  background: #ebebeb
}
.swagger-ui .opblock.is-open .opblock-summary {
  border-bottom: 1px solid var(--body-color);
}


 .swagger-ui .opblock.opblock-post .opblock-summary-method {
   background: var(--post-color);
 }

 .swagger-ui .opblock.opblock-put .opblock-summary-method {
   background: var(--put-color);
 }

 .swagger-ui .opblock.opblock-delete .opblock-summary-method {
   background: var(--delete-color);
 }

 .swagger-ui .opblock.opblock-get .opblock-summary-method {
   background: var(--get-color);
 }

 .swagger-ui .opblock.opblock-patch {
  //  border-color: #DADFE1;
   background: var(--post-body-color);
 }

 .swagger-ui .opblock.opblock-patch .opblock-summary-method {
   background: var(--put-color);
 }

 .swagger-ui .opblock.opblock-head {
  //  border-color: #DADFE1;
   background: var(--post-body-color);
 }

 .swagger-ui .opblock.opblock-head .opblock-summary-method {
   background: #5C6BC0;
 }

 .swagger-ui .opblock.opblock-options {
  //  border-color: #DADFE1;
   background: rgba(241, 241, 241, .1);
 }

 .swagger-ui .opblock.opblock-options .opblock-summary-method {
   background: var(--put-color);
 }

`