module Api
  module V1
    class RegistrationsController < ApplicationController
      def create
        user = User.create!(
            email: params['user']['email'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']
        )


        if user
          customer = Customer.create(user_id: user.id)
          session[:user_id] = user.id
          session[:customer_id] = customer.id
          render json: {
              status: :created,
              user: user,
              customer: customer
          }
        else
          render json: {status: 500}
        end
      end
    end
  end
end

