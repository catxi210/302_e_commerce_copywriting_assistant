import {  PLATFORM_LIST } from "./language";

export interface Language { chinese: string; english: string; japanese: string }
export interface IFrom { [key: string]: { type: 'Input' | 'Select' | 'Textarea', list?: Language[], isBig?: boolean } }
export interface ITool {
  id: string | number,
  name: Language,
  classify: Language,
  url: string,
  describe: Language,
  resultType: string,
  title: string,
  submitButton: string
  from: IFrom
}
interface IToolList { [key: string]: Array<ITool> }

export const toolList: IToolList = {
  // Commodity
  'Commodity': [
    {
      id: 'Commodity_1',
      resultType: 'text',
      title: 'keyword-generation',
      name: { chinese: '关键词生成', english: 'Keyword Generation', japanese: 'キーワード生成' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Keyword Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '根据产品信息生成合适的关键词',
        english: 'Generate suitable keywords based on product information.',
        japanese: '製品情報に基づいて適切なキーワードを生成します。'
      },
      from: {
        commodityInformation: { type: 'Textarea' },
      }
    },
    {
      id: 'Commodity_2',
      resultType: 'text',
      title: 'Listing-Generation',
      name: { chinese: 'Listing生成', english: 'Listing Generation', japanese: 'リスティング生成' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Listing Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '快速生成高质量产品Listing，提高上架效率。',
        english: 'Quickly generate high-quality product listings to improve listing efficiency. ',
        japanese: '高品質な製品リスティングを迅速に生成し、掲載効率を向上させます。'
      },
      from: {
        goodsKeywords: { type: 'Textarea' },
        productName: { type: 'Input' },
        category: { type: 'Input' },
        sellingPoints: { type: 'Textarea' },
      }
    },
    {
      id: 'Commodity_3',
      resultType: 'text',
      title: 'Search-Term-Generation',
      name: { chinese: '搜索词生成', english: 'Search Term Generation', japanese: '検索語生成' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Search Term Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '智能生成后台搜索关键词，提升搜索曝光。',
        english: 'Intelligently generate backend search keywords to enhance search exposure.  ',
        japanese: 'バックエンド検索キーワードを自動生成し、検索露出を向上させます。'
      },
      from: {
        commodityInformation: { type: 'Textarea' },
      }
    },
    {
      id: 'Commodity_4',
      resultType: 'text',
      title: 'Product-Description-Generation',
      name: { chinese: '商品描述生成', english: 'Product Description Generation', japanese: '商品説明生成' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Product Description Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成高质量产品详细描述，高埋词率，吸引客户兴趣。',
        english: 'Generate high-quality product detailed descriptions with high keyword density to attract customer interest.',
        japanese: '高品質な製品詳細説明を生成し、高いキーワード密度で顧客の興味を引きつけます。'
      },
      from: {
        productTitle: { type: 'Input' },
        goodsKeywords: { type: 'Textarea' },
        platform: { type: 'Select', list: PLATFORM_LIST }
      }
    },
    {
      id: 'Commodity_5',
      resultType: 'text',
      title: 'Title-Optimization',
      name: { chinese: '标题优化', english: 'Title Optimization', japanese: 'タイトル最適化' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Title Optimization.png',
      submitButton: 'Optimize',
      describe: {
        chinese: '优化Listing标题，增强搜索引擎友好度。',
        english: 'Optimize listing titles to enhance search engine friendliness.',
        japanese: 'リスティングタイトルを最適化し、検索エンジンフレンドリーを強化します。'
      },
      from: {
        goodsKeywords: { type: 'Textarea' },
        platform: { type: 'Select', list: PLATFORM_LIST }
      }
    },
    {
      id: 'Commodity_6',
      resultType: 'text',
      title: 'Product-Description-Optimization',
      name: { chinese: '商品描述优化', english: 'Product Description Optimization', japanese: '商品説明最適化' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Product Description Optimization.png',
      submitButton: 'Optimize',
      describe: {
        chinese: '提炼产品信息，输出符合规则的描述。',
        english: 'Refine product information and output rule-compliant descriptions.',
        japanese: '製品情報を抽出し、ルールに適合する説明を出力します。'
      },
      from: {
        productTitle: { type: 'Input' },
        goodsKeywords: { type: 'Textarea' },
        productDescription: { type: 'Textarea' },
        platform: { type: 'Select', list: PLATFORM_LIST }
      }
    },
    {
      id: 'Commodity_7',
      resultType: 'text',
      title: 'Listing-Comparison',
      name: { chinese: 'Listing对比', english: 'Listing Comparison', japanese: 'リスティング比較' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Listing Comparison.png',
      submitButton: 'Compare',
      describe: {
        chinese: '对比不同Listing，找出最优策略。',
        english: 'Compare different listings to find the best strategy.',
        japanese: '異なるリスティングを比較し、最適な戦略を見つけます。'
      },
      from: {
        productTitle_A: { type: 'Input' },
        productDescription_A: { type: 'Textarea' },
        mainFeatures_A: { type: 'Textarea', isBig: true },
        productTitle_B: { type: 'Input' },
        productDescription_B: { type: 'Textarea' },
        mainFeatures_B: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Commodity_8',
      resultType: 'text',
      title: 'Listing-Optimization',
      name: { chinese: 'Listing优化', english: 'Listing Optimization', japanese: 'リスティング最適化' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Listing Optimization.png',
      submitButton: 'Optimize',
      describe: {
        chinese: '整体优化产品Listing，提升排名。',
        english: 'Optimize product listings overall to improve rankings.',
        japanese: '製品リスティングを全体的に最適化し、ランキングを向上させます。'
      },
      from: {
        productTitle: { type: 'Input' },
        productDescription: { type: 'Textarea' },
        mainFeatures: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Commodity_9',
      resultType: 'text',
      title: 'Keyword-Expansion',
      name: { chinese: '关键词扩展', english: 'Keyword Expansion', japanese: 'キーワード拡張' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Keyword Expansion.png',
      submitButton: 'Expand',
      describe: {
        chinese: '扩展相关关键词，覆盖更多流量。',
        english: 'Expand related keywords to cover more traffic.',
        japanese: '関連キーワードを拡張し、より多くのトラフィックをカバーします。'
      },
      from: {
        goodsKeywords: { type: 'Textarea' },
      }
    },
    {
      id: 'Commodity_10',
      resultType: 'text',
      title: 'Title-Generation',
      name: { chinese: '标题生成', english: 'Title Generation', japanese: 'タイトル生成' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Title Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '为产品生成精准的标题，吸引客户眼球。',
        english: 'Generate precise titles for products to attract customer attention.',
        japanese: '製品の正確なタイトルを生成し、顧客の目を引きます。'
      },
      from: {
        productName: { type: 'Input' },
        brand: { type: 'Input' },
        coreSellingPoints: { type: 'Textarea' },
        platform: { type: 'Select', list: PLATFORM_LIST },
        goodsKeywords: { type: 'Textarea' },
      }
    },
    {
      id: 'Commodity_11',
      resultType: 'text',
      title: 'Tag-Generation',
      name: { chinese: '标签生成', english: 'Tag Generation', japanese: 'タグ生成' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Tag Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '自动生成标签，提高产品曝光率。',
        english: 'GAutomatically generate tags to increase product exposure.',
        japanese: 'タグを自動生成し、製品の露出を向上させます。'
      },
      from: {
        commodityInformation: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Commodity_12',
      resultType: 'text',
      title: 'Tag-Extraction',
      name: { chinese: '标签提取', english: 'Tag Extraction', japanese: 'タグ抽出' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Tag Extraction.png',
      submitButton: 'Extract',
      describe: {
        chinese: '从Listing中提取高效标签，助力营销。',
        english: 'Extract efficient tags from listings to aid marketing.',
        japanese: 'リスティングから効果的なタグを抽出し、マーケティングを支援します。'
      },
      from: {
        productTitle: { type: 'Input' },
        productDescription: { type: 'Textarea' },
      }
    },
    {
      id: 'Commodity_13',
      resultType: 'text',
      title: 'Keyword-Extraction',
      name: { chinese: '关键词提取', english: 'Keyword Extraction', japanese: 'キーワード抽出' },
      classify: { chinese: '商品', english: 'Commodity', japanese: '商品' },
      url: '/Keyword Extraction.png',
      submitButton: 'Extract',
      describe: {
        chinese: '从文本中提取有效关键词，提升搜索效果。',
        english: 'Extract effective keywords from text to enhance search performance.',
        japanese: 'テキストから有効なキーワードを抽出し、検索効果を向上させます。'
      },
      from: {
        productListing: { type: 'Textarea', isBig: true },
      }
    },
  ],
  // Marketing
  'Marketing': [
    {
      id: 'Marketing_1',
      resultType: 'text',
      title: 'Model-Analysis-Suggestions',
      name: { chinese: '改款分析建议', english: 'Model Analysis Suggestions', japanese: '改款分析提案' },
      classify: { chinese: '营销', english: 'Marketing', japanese: 'マーケティング' },
      url: '/Model Analysis Suggestions.png',
      submitButton: 'Suggest',
      describe: {
        chinese: '提供产品改款分析建议，优化产品线。',
        english: 'Provide product modification analysis suggestions to optimize the product line.',
        japanese: '製品改良の分析提案を提供し、製品ラインを最適化します。'
      },
      from: {
        productTitle: { type: 'Input' },
        productDescription: { type: 'Textarea' },
        mainFeatures: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Marketing_2',
      resultType: 'text',
      title: 'Keyword-Recommendations',
      name: { chinese: '关键词推荐', english: 'Keyword Recommendations', japanese: 'キーワード推薦' },
      classify: { chinese: '营销', english: 'Marketing', japanese: 'マーケティング' },
      url: '/Keyword Recommendations.png',
      submitButton: 'Recommend',
      describe: {
        chinese: '智能推荐高效关键词，增加流量。',
        english: 'Intelligently recommend efficient keywords to increase traffic.',
        japanese: '効率的なキーワードをインテリジェントに推奨し、トラフィックを増加させます。'
      },
      from: {
        productName: { type: 'Input' },
        goodsKeywords: { type: 'Input' },
      }
    },
    {
      id: 'Marketing_3',
      resultType: 'text',
      title: 'Listing-Analysis',
      name: { chinese: 'Listing分析', english: 'Listing Analysis', japanese: 'リスティング分析' },
      classify: { chinese: '营销', english: 'Marketing', japanese: 'マーケティング' },
      url: '/Listing Analysis.png',
      submitButton: 'Analyze',
      describe: {
        chinese: '深入分析Listing表现，发现优化空间。',
        english: 'Deeply analyze listing performance to discover optimization opportunities.',
        japanese: 'リスティングのパフォーマンスを深く分析し、最適化の余地を発見します。'
      },
      from: {
        productTitle: { type: 'Input' },
        productDescription: { type: 'Textarea' },
        mainFeatures: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Marketing_4',
      resultType: 'text',
      title: 'User-Profile-Analysis',
      name: { chinese: '用户画像分析', english: 'User Profile Analysis', japanese: 'ユーザー画像分析' },
      classify: { chinese: '营销', english: 'Marketing', japanese: 'マーケティング' },
      url: '/User Profile Analysis.png',
      submitButton: 'Analyze',
      describe: {
        chinese: '基于数据分析用户画像，精准定位客户。',
        english: 'Analyze user profiles based on data to accurately target customers.',
        japanese: 'データ分析に基づいてユーザープロファイルを作成し、顧客を正確にターゲットします。'
      },
      from: {
        targetUser: { type: 'Textarea' }
      }
    },
  ],
  // Customer Service
  'Customer Service': [
    {
      id: 'Customer_Service_1',
      resultType: 'text',
      title: 'Customer-Review-Analysis',
      name: { chinese: '客户评论分析', english: 'Customer Review Analysis', japanese: '顧客レビュー分析' },
      classify: { chinese: '客服', english: 'Customer Service', japanese: '顧客サービス' },
      url: '/Customer Review Analysis.png',
      submitButton: 'Analyze',
      describe: {
        chinese: '分析客户评论，洞察用户需求。',
        english: 'Analyze customer reviews to gain insights into user needs.',
        japanese: '顧客のレビューを分析し、ユーザーのニーズを洞察します。'
      },
      from: {
        comment: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Customer_Service_2',
      resultType: 'text',
      title: 'Email-Reply-Generation',
      name: { chinese: '邮件回复生成', english: 'Email Reply Generation', japanese: 'メール返信生成' },
      classify: { chinese: '客服', english: 'Customer Service', japanese: '顧客サービス' },
      url: '/Email Reply Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '自动生成邮件回复，提升售后服务效率。',
        english: 'Automatically generate email replies to enhance after-sales service efficiency.',
        japanese: 'メール返信を自動生成し、アフターサービスの効率を向上させます。'
      },
      from: {
        customerEmailContent: { type: 'Textarea', isBig: true },
        responseTopic: { type: 'Input' },
        customerName: { type: 'Input' },
        customerServiceName: { type: 'Input' },
      }
    },
    {
      id: 'Customer_Service_3',
      resultType: 'text',
      title: 'After-sales-Email-Reply-Generation',
      name: { chinese: '售后邮件回复生成', english: 'After-sales Email Reply Generation', japanese: 'アフターサービスメール返信生成' },
      classify: { chinese: '客服', english: 'Customer Service', japanese: '顧客サービス' },
      url: '/After-sales Email Reply Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成售后邮件回复，提高客户满意度。',
        english: 'Generate after-sales email replies to improve customer satisfaction.',
        japanese: 'アフターサービスのメール返信を生成し、顧客満足度を向上させます。'
      },
      from: {
        customerEmailContent: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Customer_Service_4',
      resultType: 'text',
      title: 'Review-Reply-Generation',
      name: { chinese: '评论回复生成', english: 'Review Reply Generation', japanese: 'レビュー返信生成' },
      classify: { chinese: '客服', english: 'Customer Service', japanese: '顧客サービス' },
      url: '/Review Reply Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '为客户评论生成合适的回复，提高互动性。',
        english: 'Generate suitable replies for customer reviews to increase interaction.',
        japanese: '顧客レビューに対する適切な返信を生成し、インタラクティブ性を向上させます。'
      },
      from: {
        comment: { type: 'Textarea' },
      }
    },
    {
      id: 'Customer_Service_5',
      resultType: 'text',
      title: 'Negative-Review-Reply-Generation',
      name: { chinese: '差评回复生成', english: 'Negative Review Reply Generation', japanese: '悪評返信生成' },
      classify: { chinese: '客服', english: 'Customer Service', japanese: '顧客サービス' },
      url: '/Negative Review Reply Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成差评回复，妥善处理客户问题。',
        english: 'Generate negative review replies to properly handle customer issues.',
        japanese: '否定的なレビューへの返信を生成し、顧客の問題を適切に処理します。'
      },
      from: {
        comment: { type: 'Textarea' },
        expectedResponse: { type: 'Input' }
      }
    },
    {
      id: 'Customer_Service_6',
      resultType: 'text',
      title: 'Buyer-Message-Reply-Generation',
      name: { chinese: '买家消息回复生成', english: 'Buyer Message Reply Generation', japanese: 'バイヤーメッセージ返信生成' },
      classify: { chinese: '客服', english: 'Customer Service', japanese: '顧客サービス' },
      url: '/Buyer Message Reply Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '快速生成买家消息回复，提升响应速度。',
        english: 'Quickly generate buyer message replies to improve response speed.',
        japanese: '買い手メッセージの返信を迅速に生成し、応答速度を向上させます。'
      },
      from: {
        comment: { type: 'Textarea' },
        expectedResponse: { type: 'Input' }
      }
    },
  ],
  // Advertisement
  'Advertisement': [
    {
      id: 'Advertisement_1',
      resultType: 'text',
      title: 'Ad-Title-Generation',
      name: { chinese: '广告标题生成', english: 'Ad Title Generation', japanese: '広告タイトル生成' },
      classify: { chinese: '广告', english: 'Advertisement', japanese: '広告' },
      url: '/Ad Title Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成吸引眼球的广告标题，提升点击率。',
        english: 'Generate eye-catching ad titles to increase click-through rates.',
        japanese: '目を引く広告タイトルを生成し、クリック率を向上させます。'
      },
      from: {
        productName: { type: 'Textarea' },
        targetUser: { type: 'Input' },
      }
    },
    {
      id: 'Advertisement_2',
      resultType: 'text',
      title: 'Review-Generation',
      name: { chinese: '评论生成', english: 'Review Generation', japanese: 'レビュー生成' },
      classify: { chinese: '广告', english: 'Advertisement', japanese: '広告' },
      url: '/Review Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '自动生成客户评论，增加社交信任。',
        english: 'Automatically generate customer reviews to increase social trust.',
        japanese: '顧客レビューを自動生成し、ソーシャル信頼を増加させます。'
      },
      from: {
        productName: { type: 'Textarea' },
        brand: { type: 'Input' },
      }
    },
    {
      id: 'Advertisement_3',
      resultType: 'text',
      title: 'Post-Generation',
      name: { chinese: 'Post生成', english: 'Post Generation', japanese: 'ポスト生成' },
      classify: { chinese: '广告', english: 'Advertisement', japanese: '広告' },
      url: '/Post Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '快速生成社交媒体Post，提升品牌曝光。',
        english: 'Quickly generate social media posts to enhance brand exposure.',
        japanese: 'ソーシャルメディア投稿を迅速に生成し、ブランドの露出を向上させます。'
      },
      from: {
        title: { type: 'Input' },
        description: { type: 'Textarea' },
      }
    },
    {
      id: 'Advertisement_4',
      resultType: 'text',
      title: 'Popular-Term-Recommendations',
      name: { chinese: '流行词推荐', english: 'Popular Term Recommendations', japanese: '流行語推薦' },
      classify: { chinese: '广告', english: 'Advertisement', japanese: '広告' },
      url: '/Popular Term Recommendations.png',
      submitButton: 'Recommend',
      describe: {
        chinese: '推荐当前流行词汇，紧跟趋势。',
        english: 'Recommend current popular vocabulary to keep up with trends.',
        japanese: '現在の流行語を推奨し、トレンドを追います。'
      },
      from: {
        description: { type: 'Textarea' },
      }
    },
    {
      id: 'Advertisement_5',
      resultType: 'text',
      title: 'Promotion-Suggestions',
      name: { chinese: '推广建议', english: 'Promotion Suggestions', japanese: 'プロモーション提案' },
      classify: { chinese: '广告', english: 'Advertisement', japanese: '広告' },
      url: '/Promotion Suggestions.png',
      submitButton: 'Suggest',
      describe: {
        chinese: '提供有效的推广建议，提高营销效果。',
        english: 'Provide effective promotion suggestions to improve marketing effectiveness.',
        japanese: '効果的なプロモーション提案を提供し、マーケティング効果を向上させます。'
      },
      from: {
        productName: { type: 'Textarea' },
      }
    },
  ],
  // Other
  'Other': [
    {
      id: 'Other_1',
      resultType: 'text',
      title: 'Inquiry-Email-Generation',
      name: { chinese: '询价邮件生成', english: 'Inquiry Email Generation', japanese: '問い合わせメール生成' },
      classify: { chinese: '其他', english: 'Other', japanese: 'その他' },
      url: '/Inquiry Email Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '自动生成询价邮件，提升沟通效率。',
        english: 'Automatically generate inquiry emails to improve communication efficiency.',
        japanese: '見積もりメールを自動生成し、コミュニケーション効率を向上させます。'
      },
      from: {
        productName: { type: 'Input' },
        orderQuantity: { type: 'Input' },
        yourName_companyName: { type: 'Input' },
      }
    },
    {
      id: 'Other_2',
      resultType: 'markdown',
      title: 'Product-Promotion-Invitation-Letter-Generation',
      name: { chinese: '带货邀约信生成', english: 'Product Promotion Invitation Letter Generation', japanese: '商品紹介依頼生成' },
      classify: { chinese: '其他', english: 'Other', japanese: 'その他' },
      url: '/Product Promotion Invitation Letter Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成KOL带货邀约信，增加合作机会。',
        english: 'Generate KOL collaboration invitation letters to increase cooperation opportunities.',
        japanese: 'KOL（キーオピニオンリーダー）への招待状を生成し、協力の機会を増やします。'
      },
      from: {
        storeName: { type: 'Input' },
        products: { type: 'Textarea' },
      }
    },
    {
      id: 'Other_3',
      resultType: 'text',
      title: 'Marketing-Email-Generation',
      name: { chinese: '营销邮件生成', english: 'Marketing Email Generation', japanese: 'マーケティングメール生成' },
      classify: { chinese: '其他', english: 'Other', japanese: 'その他' },
      url: '/Marketing Email Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成精准营销邮件，助力促销活动。',
        english: 'Generate precise marketing emails to aid promotional activities.',
        japanese: '精密なマーケティングメールを生成し、プロモーション活動を支援します。'
      },
      from: {
        productName: { type: 'Input' },
        keyFeatures: { type: 'Textarea' },
      }
    },
    {
      id: 'Other_4',
      resultType: 'text',
      title: 'Case-Study-Generation',
      name: { chinese: 'Case Study生成', english: 'Case Study Generation', japanese: 'ケーススタディ生成' },
      classify: { chinese: '其他', english: 'Other', japanese: 'その他' },
      url: '/Case Study Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '自动生成案例研究，展示产品优势。',
        english: 'Automatically generate case studies to showcase product advantages.',
        japanese: 'ケーススタディを自動生成し、製品の利点を示します。'
      },
      from: {
        customerName: { type: 'Input' },
        productNameOrBrand: { type: 'Textarea' },
      }
    },
    {
      id: 'Other_5',
      resultType: 'text',
      title: 'Foreign-Trade-Development-Letter-Generation',
      name: { chinese: '外贸开发信生成', english: 'Foreign Trade Development Letter Generation', japanese: '貿易開発信生成' },
      classify: { chinese: '其他', english: 'Other', japanese: 'その他' },
      url: '/Foreign Trade Development Letter Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成外贸开发信，开拓更多市场。',
        english: 'Generate foreign trade development letters to explore more markets.',
        japanese: '貿易開発のためのレターを生成し、より多くの市場を開拓します。'
      },
      from: {
        receiver: { type: 'Input' },
        goal: { type: 'Input' },
        productAndCompanyInformation: { type: 'Textarea', isBig: true },
      }
    },
    {
      id: 'Other_6',
      resultType: 'text',
      title: 'Product-Introduction-Generation',
      name: { chinese: '商品介绍生成', english: 'Product Introduction Generation', japanese: '商品紹介生成' },
      classify: { chinese: '其他', english: 'Other', japanese: 'その他' },
      url: '/Product Introduction Generation.png',
      submitButton: 'Generate',
      describe: {
        chinese: '生成详细商品介绍，提升用户转化。',
        english: 'Generate detailed product introductions to enhance user conversion.',
        japanese: '詳細な商品説明を生成し、ユーザーのコンバージョンを向上させます。'
      },
      from: {
        keywords: { type: 'Textarea' },
      }
    },
  ],
}

