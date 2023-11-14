import * as S from "@/styles/skeleton";

export type SkeletonProps = {
    lines?: number;
    height?: number;
    spacings?: number;
};

export function ProductsSkeleton({
    lines = 8,
    height = 285,
    spacings = 22,
}: SkeletonProps) {
    return (
        <S.Container role="main">
            <S.Grid spacings={spacings} role="grid">
                {[...Array(lines)].map((_, index) => (
                    <S.Content key={index} height={height} role="list">
                        <S.ProductImage />
                        <S.ProductInfo />
                        <S.ProductButton />
                    </S.Content>
                ))}
            </S.Grid>
        </S.Container>
    );
}
