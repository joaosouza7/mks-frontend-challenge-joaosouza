import * as S from "./styles";

export default function CartButtons() {
    return (
        <>
            <div>
                <S.Text>Qtd:</S.Text>
                <S.ButtonsContainer>
                    <S.Button>-</S.Button>
                    <S.Qtd>8</S.Qtd>
                    <S.Button>+</S.Button>
                </S.ButtonsContainer>
            </div>
        </>
    );
}
