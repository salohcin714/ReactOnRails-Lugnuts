module Api
  module V1
    class TestimonialsController < ApplicationController
      def index
        testimonials = Testimonial.where(verified: true)

        render json: {
            testimonials: testimonials
        }
      end

      def create
        testimonial = Testimonial.new(
            title: params['testimonial']['title'],
            content: params['testimonial']['content'],
            firstName: params['testimonial']['firstName'],
            lastName: params['testimonial']['lastName'],
            verified: false
        )

        if testimonial.valid?
          testimonial.save
          render json: {
              status: :created
          }
        else
          render json: {
              status: 500
          }
        end
      end

      def latest
        testimonials = Testimonial.where(verified: true).last(3)

        render json: {
            latest: testimonials
        }
      end
    end
  end
end

