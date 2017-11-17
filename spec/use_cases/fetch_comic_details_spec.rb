require 'rails_helper'

RSpec.describe FetchComicDetails do

  describe "#perform" do

    let(:api_result) { [{ title: 'x-man'}] }
    let(:comics) { class_double('Comics') }

    context 'when a comic with the id exists' do
      it 'the comic from the API' do
        allow(comics).to(
          receive(:find_by_id)
          .with(123).and_return(api_result)
        )

        subject = described_class.perform(
          123,
          comics: comics
        )

        expect(subject.result).to eq api_result
      end
    end

  end
end