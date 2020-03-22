module Api
  module V1
    class ProductLinesController < ApplicationController
      def index
        product_lines = ProductLine.all

        render json: ProductLineSerializer.new(product_lines, options).serialized_json
      end

      def show
        product_line = ProductLine.find(params[:id])

        render json: ProductLineSerializer.new(product_line, options).serialized_json
      end

      private

      def options
        @options ||= {include: %i[products]}
      end
    end
  end
end

