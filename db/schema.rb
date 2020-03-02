# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_02_185154) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.integer "customerNumber"
    t.string "customerName"
    t.string "contactLastName"
    t.string "contactFirstName"
    t.string "phone"
    t.string "addressLine1"
    t.string "addressLine2"
    t.string "city"
    t.string "state"
    t.string "zipCode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "country"
  end

  create_table "order_details", force: :cascade do |t|
    t.integer "orderNumber"
    t.integer "productCode"
    t.integer "quantityordered"
    t.decimal "priceEach"
    t.integer "orderLineNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "orderNumber"
    t.date "orderDate"
    t.date "requiredDate"
    t.date "shippedDate"
    t.string "status"
    t.text "comments"
    t.integer "customerNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "product_lines", force: :cascade do |t|
    t.string "productLine"
    t.string "textDescription"
    t.text "htmlDescription"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "productCode"
    t.string "productName"
    t.string "productLine"
    t.string "productScale"
    t.string "productVendor"
    t.text "productDescription"
    t.integer "quantityInStock"
    t.decimal "buyPrice"
    t.decimal "MSRP"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
