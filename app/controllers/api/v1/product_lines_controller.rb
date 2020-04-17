module Api
  module V1
    class ProductLinesController < ApplicationController
      def index
        product_lines = ProductLine.all

        render json: {
            productLines: product_lines
        }
      end

      def show
        product_line = ProductLine.find(params[:id])

        render json: {
            productLine: product_line
        }
      end

      private

      def options
        @options ||= {include: %i[products]}
      end
    end
  end
end

