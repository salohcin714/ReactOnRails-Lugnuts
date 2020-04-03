ActiveAdmin.register Product do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :name, :product_line_id, :description, :quantity, :cost, :retail, :image_url
  index do
    selectable_column
    column :name
    column :description
    column :quantity
    column :cost
    column :retail
    column :published
    actions defaults: false do |product|
      item "View", admin_product_path(product)

    end
    # or
    #
    # permit_params do
    #   permitted = [:name, :product_line_id, :description, :quantity, :cost, :retail, :image_url]
    #   permitted << :other if params[:action] == 'create' && current_user.admin?
    #   permitted
    # end
  end
end
