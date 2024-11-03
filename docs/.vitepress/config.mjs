import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Training, Validation, and Test Datasets - Machine Learning",
  description: "An article about training, validation, and test datasets article",
  base: "/training_validation_and_test_datasets_machine_learning/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/training_validation_and_test_datasets_machine_learning' }
    ]
  }
})
