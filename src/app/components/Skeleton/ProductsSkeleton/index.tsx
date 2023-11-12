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
        <S.Container>
            <S.Grid spacings={spacings}>
                {[...Array(lines)].map((_, index) => (
                    <S.Content key={index} height={height}>
                        <S.ProductImage />
                        <S.ProductInfo />
                        <S.ProductButton />
                    </S.Content>
                ))}
            </S.Grid>
        </S.Container>
    );
}
