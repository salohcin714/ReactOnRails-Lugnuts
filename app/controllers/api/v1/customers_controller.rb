module Api
  module V1
    class CustomersController < ApplicationController

      def update
        customer = Customer.find_by(id: params['customer']['id'])
        if customer.update(
            firstName: params['customer']['firstName'],
            lastName: params['customer']['lastName'],
            phone: params['customer']['phone'],
            address: params['customer']['address'],
            city: params['customer']['city'],
            state: params['customer']['state'],
            postalCode: params['customer']['postalCode'],
            country: params['customer']['country'])
          customer.save
          render json: {
              customer: customer,
          }
        else
          render json: {
              errors: customer.errors.messages, status: 422
          }
        end
      end
    end
  end
end


