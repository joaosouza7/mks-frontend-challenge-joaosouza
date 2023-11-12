import {
    Container,
    Content,
    ProductImage,
    ProductInfo,
    ProductButton,
    Grid,
} from "@/app/styles";

export type SkeletonProps = {
    lines?: number;
    height?: number;
    spacings?: number;
};

export function ProductSkeleton({
    lines = 8,
    height = 285,
    spacings = 22,
}: SkeletonProps) {
    return (
        <Container>
            <Grid spacings={spacings}>
                {[...Array(lines)].map((_, index) => (
                    <Content key={index} height={height}>
                        <ProductImage />
                        <ProductInfo />
                        <ProductButton />
                    </Content>
                ))}
            </Grid>
        </Container>
    );
}
