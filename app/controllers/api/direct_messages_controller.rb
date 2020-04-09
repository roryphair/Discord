class Api::DirectMessagesController < ApplicationController
    def create
        @direct_message = DirectMessage.new(direct__message_params);
        @direct_message.author_id = current_user.id
        if @direct_message.save
            render :show
        else
            render json: @direct_message.errors.full_messages, status: 404
        end
    end

    def destroy
        @direct_message = DirectMessage.find(params[:id]);
        if @direct_message.destroy
            render :show
        else
            render json: @direct_message.errors.full_messages, status: 404
        end
    end

    private
    def direct_message_params
        params.require(:direct_message).permit(:body, :receiver_id)
    end
end