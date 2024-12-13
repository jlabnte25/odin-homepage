const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean output directory before every build
  },
  devtool: "eval-source-map", // For better debugging
  devServer: {
    watchFiles: ["./src/template.html"], // Watching template for changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Template for HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Process CSS files
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // Process HTML files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
        use: [
          {
            loader: "file-loader", // Use file-loader
            options: {
              name: "[name].[hash].[ext]", // Name pattern for output images
              outputPath: "assets/", // Place images in the 'assets' folder
            },
          },
        ],
      },
      {
        test: /\.js$/, // Match .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules for speed
        use: {
          loader: "babel-loader", // Use Babel for JavaScript files
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx files
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Where Webpack puts your assets
    },
    watchFiles: ["./src/template.html"],
  },
};
