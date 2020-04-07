# == Schema Information
#
# Table name: server_users
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  role       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerUser < ApplicationRecord

    belongs_to :users,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :servers,
    foreign_key: :server_id,
    class_name: :Server
end
