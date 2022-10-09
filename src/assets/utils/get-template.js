export function getTemplate(template, selector) {
    const testimonialElement = document
        .querySelector(`.${template}`)
        .content
        .querySelector(`.${selector}`)
        .cloneNode(true);

    return testimonialElement;
};
