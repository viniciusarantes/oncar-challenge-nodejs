export const simulationService = () => {

    let score: number;
    let approval: boolean;
    let message: string;

    const getRandomScore = () => {
        return Math.floor(Math.random() * 999)
    }

    const simulate = () => {
        score = getRandomScore()
        approval = true;

        if (score < 300) {
            approval = false;
            message = "Reprovado"
        } else if (score < 600) {
            message = "70% de entrada, 30% do comprometimento da renda"
        } else if (score < 800) {
            message = "50% de entrada, 25% do comprometimento da renda"
        } else if (score < 950) {
            message = "30% de entrada, 20% do comprometimento da renda"
        } else {
            message = "100% de financiamento, taxa zero"
        }

        return { score, approval, message }
    }

    return { simulate };
}