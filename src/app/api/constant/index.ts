interface IToolParameter {
    goodsKeywords: string; productName: string; category: string; sellingPoints: string;
    commodityInformation: string; productTitle: string; platform: string; productDescription: string;
    productTitle_A: string; productDescription_A: string; mainFeatures_A: string; productTitle_B: string; productDescription_B: string;
    mainFeatures_B: string; mainFeatures: string; brand: string; coreSellingPoints: string; productListing: string;
    comment: string; orderQuantity: string; yourName_companyName: string; targetUser: string; customerEmailContent: string;
    responseTopic: string; customerName: string; customerServiceName: string; expectedResponse: string; title: string;
    description: string; storeName: string; products: string; keyFeatures: string; productNameOrBrand: string;
    receiver: string; goal: string; productAndCompanyInformation: string; keywords: string; language: string;
}

export const toolParameter: { [key: string]: (params: IToolParameter) => Array<{ role: string, content: string }> } = {
    // Keyword Generation 关键词生成
    'Keyword Generation': (params: Pick<IToolParameter, 'commodityInformation' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate some keywords based on the product information which i provided.
Return 10 results line by line in plain text, do not add explanations and notes.
The results must be in ${params.language}.
Following is the product information:<text>
${params.commodityInformation}
</text>"`
            }
        ]
    },
    // Listing Generation Listing生成
    'Listing Generation': (params: Pick<IToolParameter, 'goodsKeywords' | 'productName' | 'category' | 'sellingPoints' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a high quality Amazon listing based on the following information.
The listing must includes title, description and key features.
The key features must has 10 items in bullet list.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Keywords: <text>${params.goodsKeywords}</text>
Product name: <text>${params.productName}</text>
Category: <text>${params.category}</text>
Selling points: <text>${params.sellingPoints}</text>"`
            }
        ]
    },
    // Search Term Generation 搜索词生成
    'Search Term Generation': (params: Pick<IToolParameter, 'commodityInformation' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate backend search terms for Amazon based on the product information which i provided.
You need to generate some search terms that are not mentioned in the original text but are related to the product, and ensure that users can search for this product.

Following is the product information:""""""
${params.commodityInformation}
""""""

You must perform these actions in ${params.language}:
1. Collect and list some informations about the content, such as type, functional or style
2. Generate variant about these content which not mentioned in the original text
3. Generate 10 results line by line based on the variant infos"`
            }
        ]
    },
    // Product Description Generation 商品描述生成
    'Product Description Generation': (params: Pick<IToolParameter, 'productTitle' | 'goodsKeywords' | 'platform' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate 5 descriptions for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Following is the product information:

Title:""""""
${params.productTitle}
""""""

Keywords:""""""
${params.goodsKeywords}
"""""""`
            }
        ]
    },
    // Title Optimization 标题优化
    'Title Optimization': (params: Pick<IToolParameter, 'goodsKeywords' | 'platform' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate 5 optimized titles for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Following is the product information:""""""
${params.goodsKeywords}
"""""""`
            }
        ]
    },
    // Product Description Optimization 商品描述优化
    'Product Description Optimization': (params: Pick<IToolParameter, 'productTitle' | 'goodsKeywords' | 'productDescription' | 'platform' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is optimize the product description for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text.

Following is the product information:

Title:""""""
${params.productTitle}
""""""

Keywords:""""""
${params.goodsKeywords}
""""""

Description:""""""
${params.productDescription}
"""""""`
            }
        ]
    },
    // Listing Comparison Listing对比
    'Listing Comparison': (params: Pick<IToolParameter, 'productTitle_A' | 'productDescription_A' | 'mainFeatures_A' | 'productTitle_B' | 'productDescription_B' | 'mainFeatures_B' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Compare between the two product listings, and write a concise, professional report for marketing staff, and list the advantages and disadvantages.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Never warpped the result in code block with '```' or '```markdown'." +

                    `Product A:
Title: <text>${params.productTitle_A}</text>
Description: <text>${params.productDescription_B}</text>
Key features: <text>
${params.mainFeatures_A}
</text>

Product B:
Title: <text>${params.productTitle_B}</text>
Description: <text>${params.productDescription_B}</text>
Key features: <text>
${params.mainFeatures_B}
</text>"`
            }
        ]
    },
    // Listing Optimization Listing优化
    'Listing Optimization': (params: Pick<IToolParameter, 'productTitle' | 'productDescription' | 'mainFeatures' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Read the product listing which i provided, and then generate a optimized version.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Never warpped the result in code block with '```' or '```markdown'." +


                    `Title: <text>${params.productTitle}</text>
Description: <text>${params.productDescription}</text>
Key features: <text>
${params.mainFeatures}
</text>"`
            }
        ]
    },
    // Keyword Expansion 关键词扩展
    'Keyword Expansion': (params: Pick<IToolParameter, 'goodsKeywords' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate 10 variant keywords which related the original product for Amazon based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text line by line, never add notes.

Following is the original keywords:""""""
${params.goodsKeywords}
"""""""`
            }
        ]
    },
    // Title Generation 标题生成
    'Title Generation': (params: Pick<IToolParameter, 'productName' | 'brand' | 'coreSellingPoints' | 'platform' | 'goodsKeywords' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate 10 product titles for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
The result language must be ${params.language}.
You must return results plain text line by line, never add explanations and notes.

Product name:<text>
${params.productName}
</text>

Brand:<text>
${params.brand}
</text>

Selling points:<text>
${params.coreSellingPoints}
</text>

Keywords:<text>
${params.goodsKeywords}
</text>"`
            }
        ]
    },
    // Tag Generation 标签生成
    'Tag Generation': (params: Pick<IToolParameter, 'commodityInformation' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is generate 10 related hashtags for Etsy from product information which i provided.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Product information:""""""
${params.commodityInformation}
"""""""`
            }
        ]
    },
    // Tag Extraction 标签提取
    'Tag Extraction': (params: Pick<IToolParameter, 'productTitle' | 'productDescription' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is extract related hashtags for Etsy from product information which i provided.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Title:""""""
${params.productTitle}
""""""

Description:""""""
${params.productDescription}
"""""""`
            }
        ]
    },
    // Keyword Extraction 关键词提取
    'Keyword Extraction': (params: Pick<IToolParameter, 'productListing' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is extract keywords from product listing which i provided.

Product listing:<text>
${params.productListing}
</text>

List the keywords in ${params.language} line by line, do not add other content."`
            }
        ]
    },

    // Customer Review Analysis 客户评论分析
    'Customer Review Analysis': (params: Pick<IToolParameter, 'comment' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
You task is analyse the customer comment and generate a concise report which i provided.
You must use ${params.language} to return results plain text, never add explanations and notes.

Comment:""""""
${params.comment}
"""""""`
            }
        ]
    },
    // Inquiry Email Generation 询价邮件生成
    'Inquiry Email Generation': (params: Pick<IToolParameter, 'productName' | 'orderQuantity' | 'yourName_companyName' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Generate a inquiry email based on the information which i provided.
Make sure the result high quality and friendly.
You must use ${params.language} to write the result in plain text format, never add explanations, greetings and notes.

Product name: <text>${params.productName}</text>
Planning order quantity: <text>${params.orderQuantity}</text>
My company name: <text>${params.yourName_companyName}</text>"`
            }
        ]
    },
    // Model Analysis Suggestions 改款分析建议
    'Model Analysis Suggestions': (params: Pick<IToolParameter, 'productTitle' | 'productDescription' | 'mainFeatures' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Read the product information which i provided, and then write a modification suggestion report to help me improve market competitiveness.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Never warpped the result in code block with '```' or '```markdown'." +


                    `Title: <text>${params.productTitle}</text>
Description: <text>${params.productDescription}</text>
Key features: <text>
${params.mainFeatures}
</text>"`
            }
        ]
    },
    // Keyword Recommendations 关键词推荐
    'Keyword Recommendations': (params: Pick<IToolParameter, 'productName' | 'goodsKeywords' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Suggest some keywords for my product based on the following information.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.
Return 20 results.

Product name: <text>${params.productName}</text>
Keyword type: <text>${params.goodsKeywords}</text>"`
            }
        ]
    },
    // Listing Analysis Listing分析
    'Listing Analysis': (params: Pick<IToolParameter, 'mainFeatures' | 'productTitle' | 'productDescription' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Read the product listing which i provided, and then write a concise analyse report.
Add some suggestions for the listing.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Never warpped the result in code block with '```' or '```markdown'." +


                    `Title: <text>${params.productTitle}</text>
Description: <text>${params.productDescription}</text>
Key features: <text>
${params.mainFeatures}
</text>"`
            }
        ]
    },
    // User Profile Analysis 用户画像分析
    'User Profile Analysis': (params: Pick<IToolParameter, 'targetUser' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a professional target user profile analysis report based on my input text.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Never warpped the result in code block with '```' or '```markdown'." +

                    `Target user:<text>${params.targetUser}</text>"`
            }
        ]
    },
    // Email Reply Generation 邮件回复生成
    'Email Reply Generation': (params: Pick<IToolParameter, 'customerEmailContent' | 'responseTopic' | 'customerName' | 'customerServiceName' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me a Email reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Customer Email Content:<text>
${params.customerEmailContent}
</text>
Response topic:<text>${params.responseTopic}</text>
Customer name:<text>${params.customerName}</text>
Customer service name:<text>${params.customerServiceName}</text>"`
            }
        ]
    },
    // After-sales Email Reply Generation 售后邮件回复生成
    'After-sales Email Reply Generation': (params: Pick<IToolParameter, 'customerEmailContent' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me a after-sales Email reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Customer Email Content:<text>
${params.customerEmailContent}
</text>"`
            }
        ]
    },
    // Review Reply Generation 评论回复生成
    'Review Reply Generation': (params: Pick<IToolParameter, 'comment' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me a comment reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Comment:<text>
${params.comment}
</text>"`
            }
        ]
    },
    // Negative Review Reply Generation 差评回复生成
    'Negative Review Reply Generation': (params: Pick<IToolParameter, 'comment' | 'expectedResponse' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me a bad review reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Bad review:<text>
${params.comment}
</text>
Response topic:<text>${params.expectedResponse}</text>"`
            }
        ]
    },
    // Buyer Message Reply Generation 买家消息回复生成
    'Buyer Message Reply Generation': (params: Pick<IToolParameter, 'comment' | 'expectedResponse' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me a user message reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

User message:<text>
${params.comment}
</text>
Response topic:<text>${params.expectedResponse}</text>"`
            }
        ]
    },
    // Ad Title Generation 广告标题生成
    'Ad Title Generation': (params: Pick<IToolParameter, 'productName' | 'targetUser' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me 10 ad title based on the information i provided, which the title must be creactive, eye-cached, interesting and attract users to consume.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.

Product name:<text>${params.productName}</text>
Target user:<text>${params.targetUser}</text>"`
            }
        ]
    },
    // Review Generation 评论生成
    'Review Generation': (params: Pick<IToolParameter, 'productName' | 'brand' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me 10 user comments for my product based on the information i provided, which the comments must be reality, objective and reliable.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.

Product name:<text>${params.productName}</text>
Brand:<text>${params.brand}</text>"`
            }
        ]
    },
    // Post Generation Post生成
    'Post Generation': (params: Pick<IToolParameter, 'title' | 'description' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write me a product post content for my Amazon product based on the title and SEO description i provided, which the post must be professional, easy understand, eye-catched and creative.

Title:<text>${params.title}</text>
Description:<text>${params.description}</text>

You must write the post in your own words, you must use ${params.language} to write it, make sure that professional and fluent.
The format must be markdown, do not add any other contents.`+
"Do not wrapped the result in code block with '```' and '```markdown'."
            }
        ]
    },
    // Popular Term Recommendations 流行词推荐
    'Popular Term Recommendations': (params: Pick<IToolParameter, 'description' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Base on the product description recommand me new 10 keywords which related and more popular, the new results could be not mentioned in the input text.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.

Description:<text>${params.description}</text>"`
            }
        ]
    },
    // Promotion Suggestions 推广建议
    'Promotion Suggestions': (params: Pick<IToolParameter, 'productName' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a detailed promotion suggestion for my product.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Do not wrapped the result in code block with '```' or '```markdown'." +

                    `Product:<text>${params.productName}/text>"`
            }
        ]
    },
    // Product Promotion Invitation Letter Generation 带货邀约信生成
    'Product Promotion Invitation Letter Generation': (params: Pick<IToolParameter, 'storeName' | 'products' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a cooperation invite email for KOL sales based on the information which i provided.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Do not wrapped the result in code block with '```' or '```markdown'." +

                    `Store name:<text>${params.storeName}</text>
Product:<text>${params.products}</text>"`
            }
        ]
    },
    // Marketing Email Generation 营销邮件生成
    'Marketing Email Generation': (params: Pick<IToolParameter, 'productName' | 'keyFeatures' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a marketing email based on the information which i provided.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Do not wrapped the result in code block with '```' or '```markdown'." +

                    `Product name:<text>${params.productName}</text>
Key features:<text>
${params.keyFeatures}
</text>"`
            }
        ]
    },
    // Case Study Generation Case Study生成
    'Case Study Generation': (params: Pick<IToolParameter, 'customerName' | 'productNameOrBrand' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a case study based on the information which i provided.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Do not wrapped the result in code block with '```' or '```markdown'." +

                    `Customer name:<text>${params.customerName}</text>
Product name or Brand:<text>${params.productNameOrBrand}</text>"`
            }
        ]
    },
    // Foreign Trade Development Letter Generation 外贸开发信生成
    'Foreign Trade Development Letter Generation': (params: Pick<IToolParameter, 'receiver' | 'goal' | 'productAndCompanyInformation' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a foreign trade development email based on the information which i provided.
You must follow my goal to write the email, the Email must be professional, friendly and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.`+
                    "Do not wrapped the result in code block with '```' or '```markdown'." +

                    `Receiver:<text>${params.receiver}</text>
Goal:<text>${params.goal}</text>
Product and company information:<text>
${params.productAndCompanyInformation}
</text>"`
            }
        ]
    },
    // Product Introduction Generation 商品介绍生成
    'Product Introduction Generation': (params: Pick<IToolParameter, 'keywords' | 'language'>) => {
        return [
            {
                role: 'user',
                content: `"You are a helpful assistant which expert in E-Commerce.
Write a high quality product introduction based on the keywords which i provided.
The result must be professional, eye-catching and creactive.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Keywords:<text>
${params.keywords}
</text>"`
            }
        ]
    },
}


