import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    height: 100vh;
    margin: 0 .4rem;
    position: relative;
    

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    padding-bottom: .7rem;
`
const Button = styled.button`
    background: white;
    padding: .7rem 1rem;
    color: black;
    border: none;
    font-weight: bold;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW </Button>
        </Info>
    </Container>
  )
}

export default CategoryItem