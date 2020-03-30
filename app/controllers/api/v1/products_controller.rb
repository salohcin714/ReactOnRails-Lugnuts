module Api
  module V1
    class ProductsController < ApplicationController
      def index
        products = Product.all
        renderProduct = []
        products.each do |p|
          productInfo = {
              id: p.id,
              name: p.name,
              description: p.description,
              retail: p.retail,
              productLineID: p.product_line_id,
              imageURL: p.image_url
          }
          renderProduct.push(productInfo)
        end
        render json: {
            products: renderProduct
        }
      end

      def show
        product = Product.find_by(id: params[:id])

        render json: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                retail: product.retail,
                productLineID: product.product_line_id,
                imageURL: product.image_url

            }
        }
      end

      def create
        product = Product.new(product_params)

        if product.save
          render json: ProductSerializer.new(product).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def update
        product = Product.find_by(id: params[:id])

        if product.update(product_params)
          render json: ProductSerializer.new(product, options).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def destroy
        product = Product.find_by(id: params[:id])

        if product.destroy
          head :no_content
        else
          render json: {errors: product.errors.messages}, status: 422
        end
      end

      def latest
        products = Product.last(4)
        renderProduct = []
        products.each do |p|
          productInfo = {
              id: p.id,
              name: p.name,
              description: p.description,
              retail: p.retail,
              productLineID: p.product_line_id,
              imageURL: p.image_url
          }
          renderProduct.push(productInfo)
        end
        render json: {
            latest: renderProduct
        }
      end

      private

      def product_params
        params.require(:product).permit(:name, :product_line_id, :retail, :image_url)
      end

      def options
        @options ||= {include: %i[reviews]}
      end
    end
  end
end
