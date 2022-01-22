import styled from "styled-components"

export const MobileViewProvider = styled.div`
 width: 100%;
`
export const MobileContent = styled.div`
 /* position:relative; */
 height: auto;
`
export const BackContent = styled.div`
 position:relative;
 height: 95vh;
 overflow: hidden;
 /* z-index:-1; */
 img {
     position: absolute;
     width: 300px;
 }
 
`
export const FrontContent = styled.div`
overflow-y: scroll;
.front {
     top: 20px;
     width: 280px;
     height: auto;
     left: 10px;
 }
`